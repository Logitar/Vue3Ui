export type HorizontalAlignment = "left" | "center" | "right" | undefined;
export type VerticalAlignment = "top" | "middle" | "bottom" | undefined;

export type ToastOptions = {
  close?: string;
  duration?: number;
  fade?: boolean;
  message?: string;
  solid?: boolean;
  title?: string;
  variant?: ToastVariant;
};

export type ToastVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | undefined;
