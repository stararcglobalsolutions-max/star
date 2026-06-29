"use client";

import React, { useState, useEffect } from 'react';
import { 
  Lock, Mail, ArrowRight, LayoutDashboard, PackagePlus, 
  ListOrdered, Settings, LogOut, Plus, Search, MoreVertical, 
  Edit, Trash2, Box, Users, DollarSign, TrendingUp, ShieldAlert,
  Image as ImageIcon, CheckCircle2
} from 'lucide-react';

// ==========================================
// MOCK DATA
// ==========================================
const mockOrders = [
  { id: 'ORD-2026-8921', customer: 'Alex Johnson', date: 'Oct 24, 2026', total: 499.00, status: 'Completed' },
  { id: 'ORD-2026-8922', customer: 'Sarah Williams', date: 'Oct 25, 2026', total: 129.50, status: 'Processing' },
  { id: 'ORD-2026-8923', customer: 'Michael Chen', date: 'Oct 25, 2026', total: 850.00, status: 'Pending' },
  { id: 'ORD-2026-8924', customer: 'Emma Thompson', date: 'Oct 26, 2026', total: 245.00, status: 'Processing' },
  { id: 'ORD-2026-8925', customer: 'David Martinez', date: 'Oct 26, 2026', total: 1120.00, status: 'Completed' },
];

const mockProducts = [
  { id: '1', name: 'Hub 2 Plus', category: 'Security Hubs', price: 249.99, stock: 45, status: 'Active' },
  { id: '2', name: 'MotionProtect', category: 'Intrusion', price: 65.00, stock: 120, status: 'Active' },
  { id: '3', name: 'DoorProtect', category: 'Intrusion', price: 45.00, stock: 85, status: 'Active' },
  { id: '4', name: 'FireProtect 2', category: 'Fire Detection', price: 110.00, stock: 12, status: 'Low Stock' },
  { id: '5', name: 'KeyPad Touch', category: 'Controls', price: 185.00, stock: 0, status: 'Out of Stock' },
];

// ==========================================
// ADMIN LOGIN COMPONENT
// ==========================================
function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate network validation
    setTimeout(() => {
      setIsLoading(false);
      // Hardcoded Admin Credentials
      if (email === 'admin@stararcsystems.com' && password === 'admin123') {
        onLogin();
      } else {
        setError('Invalid credentials. Access denied.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Cinematic Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <ShieldAlert size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-2">StarArc Command</h1>
          <p className="text-sm text-neutral-400 font-medium">Authorized personnel only. Secure login required.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
          <div className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-xs font-bold p-3 rounded-xl text-center">
                {error}
              </div>
            )}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-neutral-500 mb-2">Admin Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-black transition-all"
                  placeholder="admin@stararcsystems.com"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-neutral-500">Password</label>
                <a href="#" className="text-[10px] text-blue-500 hover:text-blue-400 font-bold transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-black transition-all"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 bg-white text-black hover:bg-gray-200 py-4 rounded-xl text-[13px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Authenticate <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </form>
        
        <p className="text-center text-[11px] font-semibold text-neutral-600 mt-8">
          Secure connection established. End-to-end encrypted.
        </p>
      </div>
    </div>
  );
}

// ==========================================
// ADMIN DASHBOARD
// ==========================================
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard'); // dashboard, products, add-product, orders

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col hidden md:flex sticky top-0 h-screen overflow-y-auto">
        <div className="p-8 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <ShieldAlert size={16} className="text-black" />
          </div>
          <span className="font-black text-lg tracking-tight">Command</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'dashboard' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
          >
            <LayoutDashboard size={18} /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${(activeTab === 'products' || activeTab === 'add-product') ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
          >
            <Box size={18} /> Hardware Catalog
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'orders' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
          >
            <ListOrdered size={18} /> Orders
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-neutral-500 hover:text-white hover:bg-white/5 transition-all"
          >
            <Settings size={18} /> Settings
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={18} /> End Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto min-h-screen">
        <header className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
          <div>
            <h2 className="text-2xl font-black mb-1 capitalize text-white">
              {activeTab === 'add-product' ? 'Add New Hardware' : activeTab}
            </h2>
            <p className="text-xs font-semibold text-neutral-500">Manage your security ecosystem and orders.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-white/30 text-white w-64"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
              AD
            </div>
          </div>
        </header>

        {/* Dynamic Views */}
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'products' && <ProductsView onAddProduct={() => setActiveTab('add-product')} />}
        {activeTab === 'add-product' && <AddProductView onCancel={() => setActiveTab('products')} />}
        {activeTab === 'orders' && <OrdersView />}

      </main>
    </div>
  );
}

// ------------------------------------------
// Sub-Views
// ------------------------------------------

function DashboardView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$24,592.00" icon={<DollarSign size={20} />} trend="+12.5%" />
        <StatCard title="Active Orders" value="156" icon={<ListOrdered size={20} />} trend="+8.2%" />
        <StatCard title="Total Customers" value="1,204" icon={<Users size={20} />} trend="+3.1%" />
        <StatCard title="Hardware Models" value="48" icon={<Box size={20} />} trend="0%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-[#0f0f0f] border border-white/5 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Recent Orders</h3>
            <button className="text-xs font-bold text-blue-500 hover:text-white transition-colors">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Order ID</th>
                  <th className="py-3 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Customer</th>
                  <th className="py-3 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Date</th>
                  <th className="py-3 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Status</th>
                  <th className="py-3 font-bold text-neutral-500 text-[10px] uppercase tracking-wider text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.slice(0, 4).map((order) => (
                  <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 text-xs font-semibold text-white">{order.id}</td>
                    <td className="py-4 text-xs text-neutral-300">{order.customer}</td>
                    <td className="py-4 text-xs text-neutral-500">{order.date}</td>
                    <td className="py-4 text-xs">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${order.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-xs font-bold text-right">${order.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-6">
          <h3 className="font-bold text-lg mb-6">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">API Gateway</h4>
                <p className="text-xs text-neutral-500">Operational • 12ms latency</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Payment Processor</h4>
                <p className="text-xs text-neutral-500">Operational</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">Traffic Load</h4>
                <p className="text-xs text-neutral-500">Moderate • 450 req/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  const isPositive = trend.startsWith('+');
  return (
    <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
          {icon}
        </div>
        <span className={`text-[10px] font-black px-2 py-1 rounded-full ${isPositive ? 'bg-green-500/10 text-green-500' : 'bg-neutral-800 text-neutral-400'}`}>
          {trend}
        </span>
      </div>
      <div className="relative z-10">
        <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 mb-1">{title}</h4>
        <div className="text-2xl font-black tracking-tight">{value}</div>
      </div>
    </div>
  );
}

function ProductsView({ onAddProduct }: { onAddProduct: () => void }) {
  const [products, setProducts] = useState<any[]>(mockProducts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products') // Using basePath /stararc
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch from DB', err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="bg-white text-black px-4 py-2 rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]">All Hardware</button>
          <button className="bg-white/5 text-neutral-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">Low Stock</button>
        </div>
        <button 
          onClick={onAddProduct}
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
        >
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-black/40">
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Product</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Category</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Price</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Stock</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={6} className="py-8 text-center text-neutral-500">Loading hardware from database...</td></tr>
            ) : products.map((product) => (
              <tr key={product._id || product.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1">
                      {product.images?.white ? (
                        <img src={product.images.white} className="w-full h-full object-contain" alt={product.name} />
                      ) : (
                        <Box size={16} className="text-neutral-500" />
                      )}
                    </div>
                    <span className="text-sm font-bold text-white">{product.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-xs font-semibold text-neutral-400">{product.category}</td>
                <td className="py-4 px-6 text-xs font-bold">${product.price?.toFixed(2)}</td>
                <td className="py-4 px-6 text-xs">
                  <span className={`${product.stock < 20 ? 'text-red-500' : 'text-neutral-300'}`}>{product.stock} units</span>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider 
                    ${product.status === 'Active' ? 'bg-green-500/10 text-green-500' : 
                      product.status === 'Low Stock' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'}`}>
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                      <Edit size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-neutral-400 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OrdersView() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-black/40">
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Order ID</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Customer</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Date</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Total</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 font-bold text-neutral-500 text-[10px] uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 text-sm font-bold text-white">{order.id}</td>
                <td className="py-4 px-6 text-sm font-semibold text-neutral-300">{order.customer}</td>
                <td className="py-4 px-6 text-xs text-neutral-500">{order.date}</td>
                <td className="py-4 px-6 text-sm font-bold">${order.total.toFixed(2)}</td>
                <td className="py-4 px-6">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider 
                    ${order.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 
                      order.status === 'Processing' ? 'bg-blue-500/10 text-blue-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-xs font-bold text-neutral-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AddProductView({ onCancel }: { onCancel: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '', category: 'Security Hubs', price: '', stock: '', description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const stockNum = parseInt(formData.stock) || 0;
      const productData = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        stock: stockNum,
        tagline: "New generation hardware.", 
        badge: "",
        colors: ["white"],
        images: { white: "https://ajax.systems/wp-content/themes/ajax/assets/images/products/hub2/product-hub2-white.png" },
        specs: { range: "2000m", battery: "5 years", grade: "Grade 2", channels: "Ethernet" },
        status: stockNum > 0 ? "Active" : "Out of Stock"
      };

      await fetch('/api/products', { // using basePath
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      onCancel();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Basic Info */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><PackagePlus size={18} /> Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-neutral-500">Product Name</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Hub 2 Plus" className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-white/30" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-neutral-500">Category</label>
              <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-white/30 [&>option]:bg-black">
                <option>Security Hubs</option>
                <option>Intrusion Detection</option>
                <option>Fire Detection</option>
                <option>Water Leak</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-neutral-500">Price ($)</label>
              <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="0.00" className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-white/30" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-neutral-500">Stock Quantity</label>
              <input required type="number" value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} placeholder="0" className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-white/30" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-neutral-500">Description</label>
              <textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Detailed product description..." className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-white/30 resize-none"></textarea>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><ImageIcon size={18} /> Media & Images</h3>
          <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-white/5 hover:border-white/20 transition-colors cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-neutral-400">
              <Plus size={24} />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Click to upload or drag and drop</h4>
            <p className="text-xs text-neutral-500">SVG, PNG, JPG or WEBP (max. 5MB)</p>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button type="button" onClick={onCancel} className="px-6 py-3 rounded-xl font-bold text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">Cancel</button>
          <button type="submit" disabled={isSubmitting} className="bg-white text-black px-8 py-3 rounded-xl text-sm font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all disabled:opacity-50">
            {isSubmitting ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
