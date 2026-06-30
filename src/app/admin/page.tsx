"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldUploadWidget } from 'next-cloudinary';
import { 
  Search, Bell, MessageSquare, Sun, Moon, LogOut, Settings, Users,
  LayoutDashboard, Box, ListOrdered, Lock, Activity, BarChart3, CreditCard,
  FileText, LifeBuoy, ChevronDown, CheckCircle2, AlertTriangle, XCircle,
  Clock, TrendingUp, MoreHorizontal, ArrowUpRight, Battery, Wifi, Shield,
  Plus, Edit, Trash2, Image as ImageIcon, DollarSign, PackagePlus
} from 'lucide-react';

// ============================================================================
// MOCK DATA & CONFIG
// ============================================================================
const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Box, label: 'Products', id: 'products' },
  { icon: ListOrdered, label: 'Orders', id: 'orders' },
  { icon: Users, label: 'Customers', id: 'customers' },
  { icon: FileText, label: 'Reports', id: 'reports' },
];

const BOTTOM_SIDEBAR_ITEMS = [
  { icon: Bell, label: 'Notifications', id: 'notifications', badge: 3 },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

const mockProducts: any[] = [];

const RECENT_ORDERS = [
  { id: 'ORD-8921', customer: 'Alex Johnson', date: 'Oct 24, 2026', total: 499.00, status: 'Completed' },
  { id: 'ORD-8922', customer: 'Sarah Williams', date: 'Oct 25, 2026', total: 129.50, status: 'Processing' },
  { id: 'ORD-8923', customer: 'Michael Chen', date: 'Oct 25, 2026', total: 850.00, status: 'Pending' },
  { id: 'ORD-8924', customer: 'Emma Thompson', date: 'Oct 26, 2026', total: 245.00, status: 'Processing' },
  { id: 'ORD-8925', customer: 'David Martinez', date: 'Oct 26, 2026', total: 1120.00, status: 'Cancelled' },
];

const SMART_LOCKS = [
  { id: 'L-01', name: 'Front Gate HQ', battery: 84, status: 'Online', lastActive: '2m ago' },
  { id: 'L-02', name: 'Server Room A', battery: 12, status: 'Warning', lastActive: '1h ago' },
  { id: 'L-03', name: 'Executive Office', battery: 95, status: 'Online', lastActive: 'Just now' },
];

// ============================================================================
// COMPONENTS
// ============================================================================

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>(RECENT_ORDERS);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/products')
        .then(res => res.json())
        .then(data => {
          if(Array.isArray(data)) setProducts(data);
        })
        .catch(console.error);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return <LoginView onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden selection:bg-[#2563FF] selection:text-white">
      
      {/* Background Ambient Glow (Light mode version) */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#2563FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#4F46E5]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Sidebar */}
      <motion.aside 
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative z-20 flex flex-col border-r border-slate-200 bg-white/80 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
      >
        <div className="h-20 flex items-center px-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563FF] to-[#4F46E5] flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,255,0.3)]">
              <Shield className="text-white w-5 h-5" />
            </div>
            {isSidebarOpen && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-xl tracking-wide text-slate-900">
                STARARC<span className="text-slate-400 font-normal text-sm ml-1">OS</span>
              </motion.span>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar space-y-8" data-lenis-prevent="true">
          <div className="space-y-1">
            {isSidebarOpen && <div className="px-3 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main Menu</div>}
            {SIDEBAR_ITEMS.map(item => (
              <SidebarItem 
                key={item.id} 
                item={item} 
                isActive={activeTab === item.id || (item.id === 'products' && activeTab === 'add-product')} 
                isOpen={isSidebarOpen} 
                onClick={() => setActiveTab(item.id)} 
              />
            ))}
          </div>
          <div className="space-y-1">
            {isSidebarOpen && <div className="px-3 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">System</div>}
            {BOTTOM_SIDEBAR_ITEMS.map(item => (
              <SidebarItem key={item.id} item={item} isActive={activeTab === item.id} isOpen={isSidebarOpen} onClick={() => {}} />
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex-shrink-0" />
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 truncate">Vikas Admin</div>
                <div className="text-[11px] text-slate-500 truncate">admin@stararc.com</div>
              </div>
            )}
            {isSidebarOpen && <LogOut className="w-4 h-4 text-slate-400 hover:text-slate-900 transition-colors" onClick={() => setIsAuthenticated(false)} />}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-30 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-6 flex-1">
            <h1 className="text-xl font-bold capitalize tracking-tight text-slate-900">
              {activeTab.replace('-', ' ')}
            </h1>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full w-96 group hover:border-slate-300 transition-colors focus-within:border-[#2563FF] focus-within:ring-1 focus-within:ring-[#2563FF]/50 focus-within:bg-white shadow-inner">
              <Search className="w-4 h-4 text-slate-400 group-focus-within:text-[#2563FF] transition-colors" />
              <input type="text" placeholder="Search anything (Cmd+K)" className="bg-transparent border-none outline-none text-sm w-full text-slate-900 placeholder-slate-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <HeaderIconButton icon={MessageSquare} />
            <HeaderIconButton icon={Bell} badge />
            <div className="w-px h-6 bg-slate-200 mx-2" />
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-bold text-sm rounded-full hover:bg-slate-800 transition-colors shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]">
              <Plus className="w-4 h-4" /> Create
            </button>
          </div>
        </header>

        {/* Scrollable View Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-8" data-lenis-prevent="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-h-full"
            >
              {activeTab === 'dashboard' && <DashboardView activeOrders={orders.length} />}
              {activeTab === 'products' && <ProductsView products={products} setProducts={setProducts} onAdd={() => { setEditingProduct(null); setActiveTab('add-product'); }} onEdit={(p) => { setEditingProduct(p); setActiveTab('add-product'); }} />}
              {activeTab === 'add-product' && <AddProductView initialData={editingProduct} onCancel={() => setActiveTab('products')} onAdd={(p) => { 
                if (editingProduct) {
                  setProducts(products.map(prod => prod._id === p._id ? p : prod));
                } else {
                  setProducts([p, ...products]); 
                }
                setActiveTab('products'); 
              }} />}
              {activeTab === 'orders' && <OrdersView orders={orders} />}
              {['customers', 'reports'].includes(activeTab) && (
                <div className="flex items-center justify-center h-[60vh] text-slate-400 font-medium border-2 border-dashed border-slate-200 rounded-3xl">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} module in development...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// ============================================================================
// LOGIN VIEW
// ============================================================================
function LoginView({ onLogin }: { onLogin: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(onLogin, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2563FF]/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#4F46E5]/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[28px] bg-white border border-slate-200 mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Shield className="text-[#2563FF] w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">STARARC<span className="text-slate-400 font-normal">OS</span></h1>
          <p className="text-slate-500">Premium Ecosystem Management</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white/80 backdrop-blur-3xl rounded-[32px] border border-slate-200 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Work Email</label>
              <input type="email" required defaultValue="admin@stararc.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Password</label>
              <input type="password" required defaultValue="admin123" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
            </div>
            <button type="submit" disabled={isLoading} className="w-full mt-4 bg-gradient-to-r from-[#2563FF] to-[#4F46E5] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_8px_25px_rgba(37,99,255,0.4)] transition-all">
              {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Access Dashboard"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

// ============================================================================
// DASHBOARD VIEW
// ============================================================================
function DashboardView({ activeOrders }: { activeOrders: number }) {
  return (
    <div className="space-y-8 pb-10">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value="₹124,592.00" trend="+14.5%" icon={DollarSign} chartData={[30,40,35,50,49,60,70]} />
        <StatCard title="Active Orders" value={activeOrders.toString()} trend="+8.2%" icon={ListOrdered} chartData={[20,15,25,22,30,28,35]} />
        <StatCard title="Total Customers" value="8,402" trend="+3.1%" icon={Users} chartData={[10,20,15,25,30,40,45]} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="xl:col-span-3 bg-white backdrop-blur-xl border border-slate-200 rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900">Revenue Overview</h3>
              <p className="text-slate-500 text-sm mt-1">Monthly recurring and hardware sales</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm outline-none text-slate-700 hover:bg-slate-100 cursor-pointer">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          {/* Mock Chart visually constructed for safety without Recharts */}
          <div className="h-[300px] flex items-end justify-between gap-2 pt-4 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
              {[4,3,2,1,0].map(i => (
                <div key={i} className="w-full border-t border-slate-100 flex-1 relative">
                  <span className="absolute -left-2 -top-2 -translate-x-full text-[10px] text-slate-400">{i * 25}k</span>
                </div>
              ))}
            </div>
            {/* Bars */}
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((month, i) => {
              const height = 30 + Math.random() * 60;
              return (
                <div key={month} className="flex-1 flex flex-col items-center gap-4 group z-10">
                  <div className="w-full bg-slate-50 rounded-t-xl overflow-hidden flex items-end relative h-full">
                    <motion.div 
                      initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 1, delay: i * 0.05 }}
                      className="w-full bg-gradient-to-t from-[#2563FF] to-[#4F46E5] rounded-t-xl relative group-hover:opacity-80 transition-opacity"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-white/30 rounded-t-xl" />
                    </motion.div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{month}</span>
                </div>
              );
            })}
          </div>
        </div>


      </div>

    </div>
  );
}

// ============================================================================
// PRODUCTS VIEW
// ============================================================================
function ProductsView({ products, setProducts, onAdd, onEdit }: { products: any[], setProducts: any, onAdd: () => void, onEdit: (p:any) => void }) {
  
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await fetch(`/api/products/${id}`, { method: 'DELETE' });
        setProducts(products.filter((item: any) => item._id !== id && item.id !== id));
      } catch (e) {
        console.error("Error deleting product", e);
      }
    }
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Hardware Catalog</h2>
          <p className="text-slate-500">Manage your premium security ecosystem products.</p>
        </div>
        <button onClick={onAdd} className="bg-gradient-to-r from-[#2563FF] to-[#4F46E5] text-white px-6 py-3 rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(37,99,255,0.2)] hover:shadow-[0_10px_30px_rgba(37,99,255,0.4)] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Product</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Category</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Price</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Stock</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Status</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                key={p._id || p.id} 
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              >
                <td className="py-5 px-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-2 group-hover:border-[#2563FF]/50 transition-colors shadow-sm overflow-hidden">
                      {p.image ? <img src={p.image} className="w-full h-full object-cover rounded-xl" /> : <Box className="text-slate-400 w-5 h-5 group-hover:text-[#2563FF] transition-colors" />}
                    </div>
                    <span className="font-bold text-sm text-slate-900">{p.name}</span>
                  </div>
                </td>
                <td className="py-5 px-8 text-sm text-slate-500">{p.category}</td>
                <td className="py-5 px-8 font-bold text-slate-900">₹{Number(p.price || 0).toFixed(2)}</td>
                <td className="py-5 px-8 text-sm">
                  <span className={`${p.stock < 20 ? 'text-red-500 font-bold' : 'text-slate-600'}`}>{p.stock} units</span>
                </td>
                <td className="py-5 px-8"><StatusBadge status={p.status} /></td>
                <td className="py-5 px-8 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ActionButton icon={Edit} onClick={() => onEdit(p)} />
                    <ActionButton icon={Trash2} danger onClick={() => handleDelete(p._id || p.id)} />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// ADD PRODUCT VIEW
// ============================================================================
function AddProductView({ onCancel, onAdd, initialData }: { onCancel: () => void, onAdd: (p: any) => void, initialData?: any }) {
  const [imageUrl, setImageUrl] = useState(initialData?.image || "");
  const [name, setName] = useState(initialData?.name || "");
  const [tagline, setTagline] = useState(initialData?.category || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [featuresText, setFeaturesText] = useState(initialData?.features?.join('\n') || "");
  const [price, setPrice] = useState(initialData?.price?.toString() || "");
  const [stock, setStock] = useState(initialData?.stock?.toString() || "");
  const [colors, setColors] = useState<string[]>(initialData?.colors || []);
  const [isPublishing, setIsPublishing] = useState(false);

  const toggleColor = (color: string) => {
    setColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };

  const handlePublish = async () => {
    if (!name || !price) return;
    setIsPublishing(true);
    
    const productData = {
      name,
      category: tagline || 'General',
      description,
      features: featuresText.split('\n').map((f: string) => f.trim()).filter(Boolean),
      price: parseFloat(price) || 0,
      stock: parseInt(stock) || 0,
      status: parseInt(stock) > 0 ? 'Active' : 'Out of Stock',
      image: imageUrl,
      colors
    };

    try {
      if (initialData?._id) {
        const res = await fetch(`/api/products/${initialData._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        });
        const data = await res.json();
        onAdd(data);
      } else {
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        });
        const data = await res.json();
        onAdd(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">{initialData ? 'Edit Product' : 'Create Product'}</h2>
          <p className="text-slate-500">Configure hardware for the ecosystem.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-slate-900"><PackagePlus className="text-[#2563FF]" /> Basic Info</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Product Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Hub 2 Plus" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
              </div>
              <div className="col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Tagline</label>
                <input type="text" value={tagline} onChange={e => setTagline(e.target.value)} placeholder="Premium security baseline." className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
              </div>
              <div className="col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Detailed product description..." rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner resize-none" />
              </div>
              <div className="col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Key Features (One per line)</label>
                <textarea value={featuresText} onChange={e => setFeaturesText(e.target.value)} placeholder="e.g. 5-year battery life&#10;Wireless connectivity&#10;Tamper protection" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner resize-none leading-relaxed" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Price (₹)</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="0.00" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Stock</label>
                <input type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="100" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
              </div>
              <div className="col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Available Colors</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:border-slate-300 transition-all">
                    <input type="checkbox" checked={colors.includes('Black')} onChange={() => toggleColor('Black')} className="w-5 h-5 rounded border-slate-300 text-[#2563FF] focus:ring-[#2563FF] accent-[#2563FF] cursor-pointer" />
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-black border border-slate-200" />
                      <span className="text-sm font-bold text-slate-700">Black</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:border-slate-300 transition-all">
                    <input type="checkbox" checked={colors.includes('White')} onChange={() => toggleColor('White')} className="w-5 h-5 rounded border-slate-300 text-[#2563FF] focus:ring-[#2563FF] accent-[#2563FF] cursor-pointer" />
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-white border border-slate-200" />
                      <span className="text-sm font-bold text-slate-700">White</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-slate-900"><Settings className="text-[#2563FF]" /> Technical Specs</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Wireless Range</label>
                <input type="text" placeholder="2,000m" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Battery Life</label>
                <input type="text" placeholder="5 years" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]/50 transition-all shadow-inner" />
              </div>
            </div>
          </div>

        </div>

        <div className="space-y-8">
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-slate-900"><ImageIcon className="text-[#2563FF]" /> Media</h3>
            <CldUploadWidget uploadPreset="ml_default" onSuccess={(r:any) => setImageUrl(r?.info?.secure_url)}>
              {({ open }) => (
                <div onClick={() => open()} className="border-2 border-dashed border-slate-200 bg-slate-50 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:bg-white hover:border-[#2563FF]/50 hover:shadow-md transition-all cursor-pointer group h-64">
                  {imageUrl ? (
                    <img src={imageUrl} alt="Upload" className="h-full object-contain" />
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-400 group-hover:text-[#2563FF] transition-colors shadow-sm">
                        <Plus size={24} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Upload Product Shot</h4>
                      <p className="text-[11px] text-slate-400 uppercase tracking-widest">PNG or WEBP • MAX 5MB</p>
                    </>
                  )}
                </div>
              )}
            </CldUploadWidget>
          </div>

          <div className="flex flex-col gap-4">
            <button disabled={isPublishing} onClick={handlePublish} className="bg-gradient-to-r from-[#2563FF] to-[#4F46E5] text-white py-4 rounded-2xl font-bold text-sm shadow-[0_10px_20px_rgba(37,99,255,0.2)] hover:shadow-[0_10px_30px_rgba(37,99,255,0.4)] transition-all disabled:opacity-50 flex justify-center items-center gap-2">
              {isPublishing && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {initialData ? 'Update Product' : 'Publish Product'}
            </button>
            <button onClick={onCancel} className="bg-white border border-slate-200 text-slate-700 py-4 rounded-2xl font-bold text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// ORDERS VIEW
// ============================================================================
function OrdersView({ orders }: { orders: any[] }) {
  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Order Management</h2>
          <p className="text-slate-500">Track and process ecosystem deployments.</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Order ID</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Customer</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Date</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Status</th>
              <th className="py-5 px-8 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                key={order.id} 
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <td className="py-5 px-8 font-bold text-sm text-slate-900">{order.id}</td>
                <td className="py-5 px-8 text-sm text-slate-600 font-medium">{order.customer}</td>
                <td className="py-5 px-8 text-sm text-slate-500">{order.date}</td>
                <td className="py-5 px-8"><StatusBadge status={order.status} /></td>
                <td className="py-5 px-8 font-bold text-slate-900 text-right">₹{order.total.toFixed(2)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// HELPERS
// ============================================================================

function SidebarItem({ item, isActive, isOpen, onClick }: { item: any, isActive: boolean, isOpen: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center ${isOpen ? 'justify-between px-4' : 'justify-center'} py-3.5 rounded-2xl transition-all duration-300 relative group overflow-hidden ${isActive ? 'bg-[#2563FF]/10 text-[#2563FF]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
    >
      {isActive && (
        <motion.div layoutId="activeNav" className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563FF] rounded-r-full shadow-[0_0_10px_rgba(37,99,255,0.5)]" />
      )}
      <div className="flex items-center gap-3">
        <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#2563FF]' : 'group-hover:text-slate-700'}`} />
        {isOpen && <span className={`font-semibold text-sm ${isActive ? 'text-[#2563FF]' : ''}`}>{item.label}</span>}
      </div>
      {isOpen && item.badge && (
        <span className="bg-[#2563FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
      )}
    </button>
  );
}

function HeaderIconButton({ icon: Icon, badge }: { icon: any, badge?: boolean }) {
  return (
    <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors relative">
      <Icon className="w-5 h-5" />
      {badge && <span className="absolute top-2 right-2 w-2 h-2 bg-[#2563FF] rounded-full shadow-[0_0_10px_#2563FF]" />}
    </button>
  );
}

function StatCard({ title, value, trend, icon: Icon, chartData }: { title: string, value: string, trend: string, icon: any, chartData: number[] }) {
  const isPositive = trend.startsWith('+');
  return (
    <div className="bg-white border border-slate-200 rounded-[32px] p-6 relative overflow-hidden group hover:border-[#2563FF]/30 hover:shadow-lg transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563FF]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#2563FF]/10 transition-colors" />
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-12 h-12 rounded-[20px] bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-[#2563FF]/30 group-hover:bg-blue-50 transition-colors">
          <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#2563FF] transition-colors" />
        </div>
        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold ${isPositive ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
          {trend}
        </div>
      </div>
      <div className="relative z-10">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">{title}</h4>
        <div className="text-3xl font-bold tracking-tight text-slate-900 flex items-baseline gap-2">
          {value}
        </div>
      </div>
      {/* Mini Sparkline */}
      <div className="h-10 mt-4 flex items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
        {chartData.map((val, i) => (
          <div key={i} className="flex-1 bg-gradient-to-t from-[#2563FF] to-[#4F46E5] rounded-t-sm" style={{ height: `${(val / Math.max(...chartData)) * 100}%` }} />
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const getStyle = () => {
    switch ((status || '').toLowerCase()) {
      case 'completed':
      case 'active':
      case 'online': return 'bg-green-50 text-green-600 border-green-200';
      case 'processing':
      case 'pending': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'warning':
      case 'low stock': return 'bg-yellow-50 text-yellow-600 border-yellow-200';
      case 'cancelled':
      case 'out of stock': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStyle()}`}>
      {status || 'Unknown'}
    </span>
  );
}

function ActionButton({ icon: Icon, danger, onClick }: { icon: any, danger?: boolean, onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shadow-sm ${danger ? 'bg-white border border-slate-200 text-red-500 hover:bg-red-50 hover:border-red-200' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50'}`}>
      <Icon className="w-4 h-4" />
    </button>
  );
}
