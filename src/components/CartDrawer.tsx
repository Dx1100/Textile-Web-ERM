import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck, Ticket } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  currency: 'INR' | 'USD';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');
  
  // Checkout form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Delhi',
    pincode: '110006',
    paymentMethod: 'cod', // 'cod' | 'prepaid'
  });

  if (!isOpen) return null;

  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 86)}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const rawSubtotal = items.reduce((acc, item) => {
    return acc + (item.unitPrice * item.quantity);
  }, 0);

  const discountAmount = Math.round(rawSubtotal * appliedDiscount);
  const shippingThreshold = 2999;
  const isFreeShipping = rawSubtotal >= shippingThreshold || rawSubtotal === 0;
  const shippingCost = isFreeShipping ? 0 : 180;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + shippingCost);

  const handleApplyPromo = () => {
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'HERITAGE10') {
      setAppliedDiscount(0.10);
    } else {
      setPromoError('Invalid coupon. Try "HERITAGE10" for 10% off.');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in your name, phone, and delivery address.');
      return;
    }
    const orderNum = `BT-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedOrderId(orderNum);
    setOrderConfirmed(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#9B1D2C]" />
            <h2 className="text-base font-serif font-bold text-[#1F1916]">
              {orderConfirmed ? 'Order Confirmation' : isCheckingOut ? 'Express Checkout' : `Shopping Bag (${items.length})`}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-200/60"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {orderConfirmed ? (
            /* Order Placed State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1F1916]">
                Order Successfully Placed!
              </h3>
              <p className="text-xs text-stone-500 font-mono">
                Order ID: <span className="font-bold text-stone-900">{confirmedOrderId}</span>
              </p>
              <div className="bg-stone-50 p-4 rounded-xl text-left text-xs space-y-2 border border-stone-200/70 text-stone-700">
                <p><span className="font-semibold">Recipient:</span> {formData.fullName}</p>
                <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                <p><span className="font-semibold">Delivery Address:</span> {formData.address}, {formData.city} - {formData.pincode}</p>
                <p><span className="font-semibold">Payment:</span> {formData.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Prepaid Verified'}</p>
                <p><span className="font-semibold">Dispatch Window:</span> Expected within 24–48 hours from Chandni Chowk central warehouse.</p>
              </div>
              <p className="text-[11px] text-stone-500">
                A verification SMS and WhatsApp receipt have been triggered. For custom cutting alterations, WhatsApp us at +91 98110 54321.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOrderConfirmed(false);
                  setIsCheckingOut(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#1F1916] hover:bg-[#9B1D2C] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form */
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-xs flex justify-between">
                <span className="text-stone-500">Total Payable:</span>
                <span className="font-bold font-serif text-sm text-[#1F1916] tabular-nums">{formatPrice(grandTotal)}</span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98100 12345"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House/Plot no., Street, Landmark"
                  className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className={`p-2.5 rounded-lg border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                    formData.paymentMethod === 'cod' ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 font-semibold text-[#1F1916]' : 'border-stone-200 text-stone-600'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#9B1D2C]"
                    />
                    <span>Cash on Delivery</span>
                  </label>

                  <label className={`p-2.5 rounded-lg border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                    formData.paymentMethod === 'prepaid' ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 font-semibold text-[#1F1916]' : 'border-stone-200 text-stone-600'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="prepaid"
                      checked={formData.paymentMethod === 'prepaid'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'prepaid' })}
                      className="accent-[#9B1D2C]"
                    />
                    <span>UPI / Card / Netbanking</span>
                  </label>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="px-4 py-2.5 border border-stone-300 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Confirm & Place Order ({formatPrice(grandTotal)})
                </button>
              </div>
            </form>
          ) : items.length === 0 ? (
            /* Empty Cart */
            <div className="h-full flex flex-col items-center justify-center text-center py-16 text-stone-400">
              <ShoppingBag className="w-12 h-12 stroke-[1.2] mb-3 text-stone-300" />
              <p className="text-base font-serif font-semibold text-stone-700">Your bag is currently empty</p>
              <p className="text-xs text-stone-500 mt-1 max-w-[220px]">
                Explore our pure silk brocades, bridal yardages, or order ₹99 swatches.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 px-5 py-2.5 bg-[#1F1916] hover:bg-[#9B1D2C] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors"
              >
                Explore Fabrics
              </button>
            </div>
          ) : (
            /* Itemized List */
            <div className="space-y-4">
              {/* Free Shipping Progress bar */}
              <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/80 text-xs">
                {isFreeShipping ? (
                  <p className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Unlocked Free All-India Express Shipping!</span>
                  </p>
                ) : (
                  <div>
                    <div className="flex justify-between text-stone-600 mb-1.5">
                      <span>Add <strong className="text-stone-900">{formatPrice(shippingThreshold - rawSubtotal)}</strong> for Free Delivery</span>
                      <span>{Math.round((rawSubtotal / shippingThreshold) * 100)}%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#9B1D2C] h-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (rawSubtotal / shippingThreshold) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Items */}
              <div className="divide-y divide-stone-100 space-y-3">
                {items.map((item) => (
                  <div key={item.cartItemId} className="pt-3 first:pt-0 flex gap-3 items-center">
                    {/* Color Swatch / Miniature */}
                    <div 
                      className="w-14 h-14 rounded-lg shrink-0 border border-stone-200 shadow-2xs relative overflow-hidden"
                      style={{ backgroundColor: item.product.colorHex }}
                    >
                      {item.purchaseType === 'swatch_sample' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-[9px] text-white font-bold uppercase tracking-wider">
                          Swatch
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-serif font-bold text-[#1F1916] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-stone-500">
                        Color: {item.selectedColor} · {item.purchaseType === 'swatch_sample' ? 'Sample (10x10cm)' : 'Fabric Meter'}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        {item.purchaseType === 'fabric_meters' ? (
                          <div className="flex items-center border border-stone-200 rounded-md bg-stone-50 text-xs">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartItemId, Math.max(0.5, item.quantity - 0.5))}
                              className="px-2 py-0.5 text-stone-600 hover:text-stone-900"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-semibold tabular-nums text-stone-900">{item.quantity}m</span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 0.5)}
                              className="px-2 py-0.5 text-stone-600 hover:text-stone-900"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] text-stone-600 font-medium">1 Sample</span>
                        )}

                        <span className="text-xs font-bold text-[#1F1916] tabular-nums font-serif">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code Section */}
              <div className="pt-3 border-t border-stone-200">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Ticket className="w-3.5 h-3.5 absolute left-2.5 top-3 text-stone-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Coupon: HERITAGE10"
                      className="w-full text-xs pl-8 pr-2 py-2 border border-stone-200 rounded-lg uppercase tracking-wider focus:outline-none focus:border-[#9B1D2C]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {appliedDiscount > 0 && (
                  <p className="text-[11px] text-emerald-700 mt-1 font-medium">
                    ✓ 10% Heritage discount applied!
                  </p>
                )}
                {promoError && (
                  <p className="text-[11px] text-rose-600 mt-1">{promoError}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Subtotal & Action */}
        {!orderConfirmed && !isCheckingOut && items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#FAF8F5] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-900 tabular-nums">{formatPrice(rawSubtotal)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Heritage Discount (10%)</span>
                  <span className="font-semibold tabular-nums">-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span className="font-semibold text-stone-900">{isFreeShipping ? 'FREE' : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1F1916] pt-2 border-t border-stone-200">
                <span>Total Amount</span>
                <span className="tabular-nums font-serif text-base">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCheckingOut(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
              <span>Safe & Secure Packaging · Direct Dispatch from Delhi</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
