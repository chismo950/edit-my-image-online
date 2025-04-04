"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Update the Language type to include new languages
export type Language = "en" | "zh-CN" | "zh-TW" | "es" | "fr" | "ja" | "ko"

// Update the translations object to include new languages
const translations = {
  en: {
    title: "EditMyImage.Online",
    description: "Upload, edit, and download your images with various tools",
    upload: "Upload Image",
    noImage: "No image",
    uploadToStart: "Upload an image to start editing",
    width: "Width (px)",
    height: "Height (px)",
    maintainAspectRatio: "Maintain aspect ratio",
    applyResize: "Apply Resize",
    rotate: "Rotate",
    startCrop: "Start Crop",
    cancelCrop: "Cancel Crop",
    applyCrop: "Apply Crop",
    brightness: "Brightness",
    contrast: "Contrast",
    saturation: "Saturation",
    applyAdjustments: "Apply Adjustments",
    text: "Text",
    textSize: "Text Size",
    textColor: "Text Color",
    updateText: "Update Text",
    delete: "Delete",
    deselect: "Deselect",
    addText: "Add Text",
    textElements: "Text Elements",
    outputFormat: "Output Format",
    quality: "Quality",
    undo: "Undo",
    redo: "Redo",
    reset: "Reset",
    download: "Download",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    language: "Language",
    english: "English",
    chineseSimplified: "简体中文",
    chineseTraditional: "繁體中文",
    spanish: "Español",
    french: "Français",
    japanese: "日本語",
    korean: "한국어",
  },
  "zh-CN": {
    title: "EditMyImage.Online",
    description: "上传、编辑和下载您的图像，使用各种工具",
    upload: "上传图像",
    noImage: "没有图像",
    uploadToStart: "上传图像开始编辑",
    width: "宽度 (像素)",
    height: "高度 (像素)",
    maintainAspectRatio: "保持宽高比",
    applyResize: "应用调整大小",
    rotate: "旋转",
    startCrop: "开始裁剪",
    cancelCrop: "取消裁剪",
    applyCrop: "应用裁剪",
    brightness: "亮度",
    contrast: "对比度",
    saturation: "饱和度",
    applyAdjustments: "应用调整",
    text: "文本",
    textSize: "文本大小",
    textColor: "文本颜色",
    updateText: "更新文本",
    delete: "删除",
    deselect: "取消选择",
    addText: "添加文本",
    textElements: "文本元素",
    outputFormat: "输出格式",
    quality: "质量",
    undo: "撤销",
    redo: "重做",
    reset: "重置",
    download: "下载",
    theme: "主题",
    light: "亮色",
    dark: "暗色",
    system: "跟随系统",
    language: "语言",
    english: "English",
    chineseSimplified: "简体中文",
    chineseTraditional: "繁體中文",
    spanish: "Español",
    french: "Français",
    japanese: "日本語",
    korean: "한국어",
  },
  "zh-TW": {
    title: "EditMyImage.Online",
    description: "上傳、編輯和下載您的圖像，使用各種工具",
    upload: "上傳圖像",
    noImage: "沒有圖像",
    uploadToStart: "上傳圖像開始編輯",
    width: "寬度 (像素)",
    height: "高度 (像素)",
    maintainAspectRatio: "保持寬高比",
    applyResize: "應用調整大小",
    rotate: "旋轉",
    startCrop: "開始裁剪",
    cancelCrop: "取消裁剪",
    applyCrop: "應用裁剪",
    brightness: "對比度",
    contrast: "對比度",
    saturation: "飽和度",
    applyAdjustments: "應用調整",
    text: "文字",
    textSize: "文字大小",
    textColor: "文字顏色",
    updateText: "更新文字",
    delete: "刪除",
    deselect: "取消選擇",
    addText: "添加文字",
    textElements: "文字元素",
    outputFormat: "輸出格式",
    quality: "品質",
    undo: "撤銷",
    redo: "重做",
    reset: "重置",
    download: "下載",
    theme: "主題",
    light: "亮色",
    dark: "暗色",
    system: "跟隨系統",
    language: "語言",
    english: "English",
    chineseSimplified: "简体中文",
    chineseTraditional: "繁體中文",
    spanish: "Español",
    french: "Français",
    japanese: "日本語",
    korean: "한국어",
  },
  es: {
    title: "EditMyImage.Online",
    description: "Sube, edita y descarga tus imágenes con varias herramientas",
    upload: "Subir Imagen",
    noImage: "Sin imagen",
    uploadToStart: "Sube una imagen para comenzar a editar",
    width: "Ancho (px)",
    height: "Alto (px)",
    maintainAspectRatio: "Mantener relación de aspecto",
    applyResize: "Aplicar Redimensión",
    rotate: "Rotar",
    startCrop: "Iniciar Recorte",
    cancelCrop: "Cancelar Recorte",
    applyCrop: "Aplicar Recorte",
    brightness: "Brillo",
    contrast: "Contraste",
    saturation: "Saturación",
    applyAdjustments: "Aplicar Ajustes",
    text: "Texto",
    textSize: "Tamaño de Texto",
    textColor: "Color de Texto",
    updateText: "Actualizar Texto",
    delete: "Eliminar",
    deselect: "Deseleccionar",
    addText: "Añadir Texto",
    textElements: "Elementos de Texto",
    outputFormat: "Formato de Salida",
    quality: "Calidad",
    undo: "Deshacer",
    redo: "Rehacer",
    reset: "Restablecer",
    download: "Descargar",
    theme: "Tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    language: "Idioma",
    english: "English",
    chineseSimplified: "简体中文",
    chineseTraditional: "繁體中文",
    spanish: "Español",
    french: "Français",
    japanese: "日本語",
    korean: "한국어",
  },
  fr: {
    title: "EditMyImage.Online",
    description: "Téléchargez, modifiez et téléchargez vos images avec divers outils",
    upload: "Télécharger une Image",
    noImage: "Pas d'image",
    uploadToStart: "Téléchargez une image pour commencer à éditer",
    width: "Largeur (px)",
    height: "Hauteur (px)",
    maintainAspectRatio: "Maintenir les proportions",
    applyResize: "Appliquer le Redimensionnement",
    rotate: "Rotation",
    startCrop: "Commencer le Recadrage",
    cancelCrop: "Annuler le Recadrage",
    applyCrop: "Appliquer le Recadrage",
    brightness: "Luminosité",
    contrast: "Contraste",
    saturation: "Saturation",
    applyAdjustments: "Appliquer les Ajustements",
    text: "Texte",
    textSize: "Taille du Texte",
    textColor: "Couleur du Texte",
    updateText: "Mettre à Jour le Texte",
    delete: "Supprimer",
    deselect: "Désélectionner",
    addText: "Ajouter du Texte",
    textElements: "Éléments de Texte",
    outputFormat: "Format de Sortie",
    quality: "Qualité",
    undo: "Annuler",
    redo: "Rétablir",
    reset: "Réinitialiser",
    download: "Télécharger",
    theme: "Thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    language: "Langue",
    english: "English",
    chineseSimplified: "简体中文",
    chineseTraditional: "繁體中文",
    spanish: "Español",
    french: "Français",
    japanese: "日本語",
    korean: "한국어",
  },
  ja: {
    title: "EditMyImage.Online",
    description: "さまざまなツールで画像をアップロード、編集、ダウンロード",
    upload: "画像をアップロード",
    noImage: "画像なし",
    uploadToStart: "編集を開始するには画像をアップロード",
    width: "幅 (px)",
    height: "高さ (px)",
    maintainAspectRatio: "縦横比を維持",
    applyResize: "サイズ変更を適用",
    rotate: "回転",
    startCrop: "切り抜き開始",
    cancelCrop: "切り抜きキャンセル",
    applyCrop: "切り抜き適用",
    brightness: "明るさ",
    contrast: "コントラスト",
    saturation: "彩度",
    applyAdjustments: "調整を適用",
    text: "テキスト",
    textSize: "テキストサイズ",
    textColor: "テキスト色",
    updateText: "テキスト更新",
    delete: "削除",
    deselect: "選択解除",
    addText: "テキスト追加",
    textElements: "テキスト要素",
    outputFormat: "出力形式",
    quality: "品質",
    undo: "元に戻す",
    redo: "やり直し",
    reset: "リセット",
    download: "ダウンロード",
    theme: "テーマ",
    light: "ライト",
    dark: "ダーク",
    system: "システム",
    language: "言語",
    english: "English",
    chineseSimplified: "简体中文",
    chineseTraditional: "繁體中文",
    spanish: "Español",
    french: "Français",
    japanese: "日本語",
    korean: "한국어",
  },
  ko: {
    title: "EditMyImage.Online",
    description: "다양한 도구로 이미지 업로드, 편집 및 다운로드",
    upload: "이미지 업로드",
    noImage: "이미지 없음",
    uploadToStart: "편집을 시작하려면 이미지를 업로드하세요",
    width: "너비 (px)",
    height: "높이 (px)",
    maintainAspectRatio: "화면비 유지",
    applyResize: "크기 조정 적용",
    rotate: "회전",
    startCrop: "자르기 시작",
    cancelCrop: "자르기 취소",
    applyCrop: "자르기 적용",
    brightness: "밝기",
    contrast: "대비",
    saturation: "채도",
    applyAdjustments: "조정 적용",
    text: "텍스트",
    textSize: "텍스트 크기",
    textColor: "텍스트 색상",
    updateText: "텍스트 업데이트",
    delete: "삭제",
    deselect: "선택 해제",
    addText: "텍스트 추가",
    textElements: "텍스트 요소",
    outputFormat: "출력 형식",
    quality: "품질",
    undo: "실행 취소",
    redo: "다시 실행",
    reset: "초기화",
    download: "다운로드",
    theme: "테마",
    light: "라이트",
    dark: "다크",
    system: "시스템",
    language: "언어",
    english: "English",
    chineseSimplified: "简体中文",
    chineseTraditional: "繁體中文",
    spanish: "Español",
    french: "Français",
    japanese: "日本語",
    korean: "한국어",
  },
}

// Create context type
type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: keyof typeof translations.en) => string
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Create provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isInitialized, setIsInitialized] = useState(false)

  // Load saved language preference from localStorage
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("preferred-language")

      if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
        setLanguage(savedLanguage as Language)
      } else {
        // Detect system language if no saved preference
        const detectLanguage = () => {
          const browserLang = navigator.language.toLowerCase()

          if (browserLang.startsWith("zh")) {
            // Check for traditional Chinese regions
            if (browserLang.includes("tw") || browserLang.includes("hk") || browserLang.includes("mo")) {
              return "zh-TW"
            }
            return "zh-CN"
          }

          if (browserLang.startsWith("ja")) return "ja"
          if (browserLang.startsWith("ko")) return "ko"
          if (browserLang.startsWith("es")) return "es"
          if (browserLang.startsWith("fr")) return "fr"

          return "en" // Default to English
        }

        setLanguage(detectLanguage() as Language)
      }

      setIsInitialized(true)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem("preferred-language", language)
    }
  }, [language, isInitialized])

  // Translation function
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key]
  }

  // Custom setLanguage function that also updates localStorage
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLanguage)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Create hook for using the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

