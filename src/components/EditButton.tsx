"use client";

import { Edit3, Plus } from "lucide-react";
import CRUDModal from "./CRUDModal";

interface EditButtonProps {
  category: "albi" | "alpha" | "arc";
  item?: Record<string, unknown>;
  onRefresh?: () => void;
  variant?: "edit" | "add";
  className?: string;
}

export default function EditButton({
  category,
  item,
  onRefresh,
  variant = "edit",
  className = "",
}: EditButtonProps) {
  const handleEditClick = () => {
    // Edit button is disabled - no action
    return;
  };

  const handleSave = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  const Icon = variant === "add" ? Plus : Edit3;

  return (
    <>
      <button
        onClick={handleEditClick}
        disabled={true}
        className={`
          group relative overflow-hidden cursor-not-allowed opacity-50
          ${
            variant === "add"
              ? "fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow-lg z-40"
              : `inline-flex items-center space-x-2 px-3 py-1.5 bg-gray-500/20 border border-gray-500/20 rounded-lg transition-all duration-200 ${className}`
          }
        `}
        title="Edit function is currently disabled">
        <Icon
          className={`${
            variant === "add"
              ? "w-6 h-6 text-gray-300"
              : "w-4 h-4 text-gray-300"
          }`}
        />
        {variant === "edit" && (
          <span className="text-gray-300 text-sm font-medium">Edit</span>
        )}
      </button>

      {/* CRUD Modal - Disabled */}
      <CRUDModal
        isOpen={false}
        onClose={() => {}}
        category={category}
        item={item}
        onSave={handleSave}
      />
    </>
  );
}
