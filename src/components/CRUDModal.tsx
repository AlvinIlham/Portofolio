"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, Trash2 } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabase";

interface CRUDModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: "albi" | "alpha" | "arc";
  item?: Record<string, unknown>;
  onSave: () => void;
}

// Helper function to safely get string values from formData
const getStringValue = (obj: Record<string, unknown>, key: string): string => {
  const value = obj[key];
  return typeof value === "string" ? value : "";
};

// Helper function to safely get array values from formData
const getArrayValue = (obj: Record<string, unknown>, key: string): string[] => {
  const value = obj[key];
  return Array.isArray(value) ? value : [];
};

export default function CRUDModal({
  isOpen,
  onClose,
  category,
  item,
  onSave,
}: CRUDModalProps) {
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const supabase = createSupabaseClient();

  // Initialize form data based on category and item
  useEffect(() => {
    if (item) {
      setFormData(item);
      setImagePreview(typeof item.image === "string" ? item.image : "");
    } else {
      // Default structure based on category
      const defaultData = {
        albi: {
          title: "",
          description: "",
          image: "",
          category: "",
          technologies: [],
          overview: "",
          history: "",
          applications: [],
          current_trends: [],
          challenges: [],
        },
        alpha: {
          title: "",
          description: "",
          image: "",
          category: "",
          technologies: [],
          overview: "",
          history: "",
          applications: [],
          current_trends: [],
          challenges: [],
        },
        arc: {
          title: "",
          description: "",
          image: "",
          category: "certifications",
          type: "",
          date: "",
          organization: "",
          pdf_url: "",
          view_url: "",
          metadata: {},
        },
      };
      setFormData(defaultData[category]);
      setImagePreview("");
    }
  }, [item, category]);

  const handleInputChange = (key: string, value: unknown) => {
    setFormData((prev: Record<string, unknown>) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleArrayInputChange = (key: string, value: string) => {
    const items = value.split("\n").filter((item) => item.trim());
    handleInputChange(key, items);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${category}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("portfolio-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("portfolio-images")
        .getPublicUrl(filePath);

      const imageUrl = data.publicUrl;
      handleInputChange("image", imageUrl);
      setImagePreview(imageUrl);
    } catch {
      setError("Failed to upload image");
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setError("");

    try {
      const tableName =
        category === "arc" ? "arc_items" : `${category}_projects`;
      const dataToSave = {
        ...formData,
        updated_at: new Date().toISOString(),
      };

      if (item?.id) {
        // Update existing item
        const { error } = await supabase
          .from(tableName)
          .update(dataToSave)
          .eq("id", item.id);

        if (error) throw error;
      } else {
        // Create new item
        const { error } = await supabase.from(tableName).insert([
          {
            ...dataToSave,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to save item");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!item?.id) return;

    if (!confirm("Are you sure you want to delete this item?")) return;

    setLoading(true);
    try {
      const tableName =
        category === "arc" ? "arc_items" : `${category}_projects`;
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", item.id);

      if (error) throw error;

      onSave();
      onClose();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to delete item");
    } finally {
      setLoading(false);
    }
  };

  const renderFormFields = () => {
    if (category === "arc") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Title
              </label>
              <input
                type="text"
                value={getStringValue(formData, "title")}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Category
              </label>
              <select
                value={getStringValue(formData, "category")}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="certifications">Certifications</option>
                <option value="research">Research</option>
                <option value="achievements">Achievements</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Type
              </label>
              <input
                type="text"
                value={getStringValue(formData, "type")}
                onChange={(e) => handleInputChange("type", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Date
              </label>
              <input
                type="date"
                value={getStringValue(formData, "date")}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Organization
            </label>
            <input
              type="text"
              value={getStringValue(formData, "organization")}
              onChange={(e) =>
                handleInputChange("organization", e.target.value)
              }
              className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                PDF URL
              </label>
              <input
                type="url"
                value={getStringValue(formData, "pdf_url")}
                onChange={(e) => handleInputChange("pdf_url", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                View URL
              </label>
              <input
                type="url"
                value={getStringValue(formData, "view_url")}
                onChange={(e) => handleInputChange("view_url", e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Title
            </label>
            <input
              type="text"
              value={getStringValue(formData, "title")}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Category
            </label>
            <input
              type="text"
              value={getStringValue(formData, "category")}
              onChange={(e) => handleInputChange("category", e.target.value)}
              className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Overview
          </label>
          <textarea
            value={getStringValue(formData, "overview")}
            onChange={(e) => handleInputChange("overview", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            History
          </label>
          <textarea
            value={getStringValue(formData, "history")}
            onChange={(e) => handleInputChange("history", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Technologies (one per line)
          </label>
          <textarea
            value={getArrayValue(formData, "technologies").join("\n")}
            onChange={(e) =>
              handleArrayInputChange("technologies", e.target.value)
            }
            rows={4}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Applications (one per line)
          </label>
          <textarea
            value={getArrayValue(formData, "applications").join("\n")}
            onChange={(e) =>
              handleArrayInputChange("applications", e.target.value)
            }
            rows={4}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Current Trends (one per line)
          </label>
          <textarea
            value={getArrayValue(formData, "current_trends").join("\n")}
            onChange={(e) =>
              handleArrayInputChange("current_trends", e.target.value)
            }
            rows={4}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Challenges (one per line)
          </label>
          <textarea
            value={getArrayValue(formData, "challenges").join("\n")}
            onChange={(e) =>
              handleArrayInputChange("challenges", e.target.value)
            }
            rows={4}
            className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
          onClick={onClose}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-4xl w-full my-8 min-h-fit bg-slate-900 rounded-2xl border border-white/20 overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  {item ? "Edit" : "Add"} {category.toUpperCase()} Item
                </h2>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={getStringValue(formData, "description")}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Image
                  </label>
                  <div className="space-y-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {imagePreview && (
                      <div className="relative w-32 h-32">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <input
                      type="url"
                      placeholder="Or enter image URL"
                      value={getStringValue(formData, "image")}
                      onChange={(e) => {
                        handleInputChange("image", e.target.value);
                        setImagePreview(e.target.value);
                      }}
                      className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Dynamic Fields */}
                {renderFormFields()}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  {item && (
                    <button
                      onClick={handleDelete}
                      disabled={loading}
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50">
                    <Save className="w-4 h-4" />
                    <span>{loading ? "Saving..." : "Save"}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
