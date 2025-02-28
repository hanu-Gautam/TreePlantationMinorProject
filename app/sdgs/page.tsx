import Link from "next/link"
import { Leaf } from "lucide-react"

export default function SDGs() {
  // SDGs data
  const sdgs = [
    {
      id: 1,
      number: "SDG 1",
      title: "No Poverty",
      description: "Our tree plantation initiatives create employment opportunities for rural communities, helping to alleviate poverty.",
      color: "bg-red-500",
      icon: "/placeholder.svg?height=100&width=100",
      contributions: [
        "Employment generation for rural communities",
        "Sustainable livelihoods through agroforestry",
        "Income diversification for farmers"
      ]
    },
    {
      id: 2,
      number: "SDG 2",
      title: "Zero Hunger",
      description: "By promoting fruit-bearing trees and agroforestry, we help improve food security and nutrition in local communities.",
      color: "bg-yellow-500",
      icon: "/placeholder.svg?height=100&width=100",
      contributions: [
        "Fruit-bearing trees for improved nutrition",
        "Agroforestry systems for sustainable food production",
        "Soil improvement for better crop yields"
      ]
    },
    {
      id: 13,
      number: "SDG 13",
      title: "Climate Action",
      description: "Trees absorb CO2, helping to mitigate climate change. Our plantation efforts directly contribute to carbon sequestration.",
      color: "bg-green-600",
      icon: "/placeholder.svg?height=100&width=100",
      contributions: [
        "Carbon sequestration through tree planting",
        "Reduction of greenhouse gas emissions",
        "Climate resilience through ecosystem restoration"
      ]
    },
    {
      id: 15,
      number: "SDG 15",
      title: "Life on Land",
      description: "We restore degraded lands, combat desertification, and promote biodiversity conservation through our plantation activities.",
      color: "bg-green-700",
      icon: "/placeholder.svg?height=100&width=100",
      contributions: [
        "Restoration of degraded forest ecosystems",
        "Biodiversity conservation through native species planting",
        "Prevention of soil erosion and land degradation"
      ]
    },
    {
      id: 6,
      number: "SDG 6",
      title: "Clean Water and Sanitation",
      description: "Trees help maintain water cycles, prevent soil erosion, and improve water quality in watersheds.",
      color: "bg-blue-500",
      icon: "/placeholder.svg?height=100&width=100",
      contributions: [
        "Watershed protection and management",
        "Improved water retention in soil",
        "Reduced water pollution through natural filtration"
      ]
    },
    {
      id: 11,
      number: "SDG 11",
      title: "Sustainable Cities and Communities",
      description: "Our urban forestry initiatives create greener, more livable cities with improved air quality and reduced heat island effects.",
      color: "bg-yellow-600",
      icon: "/placeholder.svg?height=100&width=100",
      contributions: [
        "Urban green spaces for community well-being",
        "Reduction of urban heat island effect",
        "Improved air quality in cities"
      ]
    }
  ]

  // Featured SDG (Climate Action)
  const featuredSdg = sdgs.find(sdg => sdg.id === 13)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-green-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">TreePlantation</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-\

