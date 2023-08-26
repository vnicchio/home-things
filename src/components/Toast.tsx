import { ToastDescription, Toast as GlueToast } from "@gluestack-ui/react";

type ToastProps = {
  type: "success" | "error" | "info",
  title: string
}

const colorMessage = {
  success: "#00B37E",
  error: "#F75A68",
  info: "#06B6D4"
}

export function Toast({type = "success", title}: ToastProps) {
  return (
    <GlueToast backgroundColor={colorMessage[type]}>
      <ToastDescription color="#fff">
        {title}
      </ToastDescription>
    </GlueToast>
  )
}