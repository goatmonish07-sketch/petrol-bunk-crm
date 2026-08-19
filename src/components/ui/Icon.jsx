import {
  LayoutDashboard, BarChart3, Fuel, Users, Landmark, FileText, Bell, Settings,
  IndianRupee, TrendingUp, Wallet, Tag, Clock, Search, Printer, Download,
  Menu, Moon, Sun, ChevronRight, Phone, MoreHorizontal, CheckCircle2, Droplet,
  Plus, Package, AlertTriangle, CreditCard, ArrowRight, TrendingDown, Truck,
} from 'lucide-react'

const MAP = {
  LayoutDashboard, BarChart3, Fuel, Users, Landmark, FileText, Bell, Settings,
  IndianRupee, TrendingUp, Wallet, Tag, Clock, Search, Printer, Download,
  Menu, Moon, Sun, ChevronRight, Phone, MoreHorizontal, CheckCircle2, Droplet,
  Plus, Package, AlertTriangle, CreditCard, ArrowRight, TrendingDown, Truck,
}

export function Icon({ name, className = 'h-5 w-5', ...props }) {
  const C = MAP[name] || Droplet
  return <C className={className} strokeWidth={2} {...props} />
}
