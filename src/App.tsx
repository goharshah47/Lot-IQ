/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Car, 
  BatteryCharging, 
  MapPin, 
  ClipboardCheck, 
  Thermometer, 
  Construction, 
  Trash2, 
  AlertTriangle, 
  FileText, 
  BarChart3, 
  Navigation, 
  Lightbulb,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Mail
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">LotIQ</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Use Cases</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#platform" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Platform</a>
              <a href="#team" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Team</a>
              <a href="#stack" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Stack</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm shadow-blue-200">
                Request Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <a href="#use-cases" className="text-lg font-medium text-slate-600">Use Cases</a>
            <a href="#how-it-works" className="text-lg font-medium text-slate-600">How it Works</a>
            <a href="#platform" className="text-lg font-medium text-slate-600">Platform</a>
            <a href="#team" className="text-lg font-medium text-slate-600">Team</a>
            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl text-base font-semibold">
              Request Demo
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6"
          >
            <Zap className="w-3 h-3" />
            AI-Powered Lot Intelligence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            The <span className="text-blue-600">operating system</span> for your physical property
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            LotIQ transforms parking lots and outdoor property into intelligent, evidence-generating assets — enforcement, hazards, liability, and traffic in one platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Request a Demo <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all">
              See Use Cases
            </button>
          </motion.div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="max-w-6xl mx-auto mt-20 relative">
          <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative">
            <img 
              src="https://picsum.photos/seed/parking/1200/800" 
              alt="LotIQ Dashboard Preview" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            
            {/* Floating UI Elements */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/50 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Live — Camera 1</span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-1 bg-blue-500 rounded-full" />
                <div className="flex-1 h-1 bg-slate-200 rounded-full" />
                <div className="flex-1 h-1 bg-slate-200 rounded-full" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-bold">Unauthorized Parking</span>
                <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">Violation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            <div className="text-center md:border-r border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Core Use Case Categories</div>
            </div>
            <div className="text-center md:border-r border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Continuous AI Monitoring</div>
            </div>
            <div className="text-center md:border-r border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">&lt; 30s</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Alert-to-Action Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Timestamp-verified Evidence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Use Cases</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">Every scenario that happens on <span className="text-blue-600">your lot</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Property managers can't be everywhere. LotIQ is — detecting, documenting, and alerting across every major lot use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard 
              icon={<Car className="w-6 h-6" />}
              title="Fixed Spot Enforcement"
              description="Identify unauthorized vehicles and trigger automated enforcement and vehicle alerts. Detect vehicles in reserved spots and trigger tow orders."
              tags={["LICENSE PLATE AI", "AUTO-TOW"]}
            />
            <UseCaseCard 
              icon={<BatteryCharging className="w-6 h-6" />}
              title="EV Charging Enforcement"
              description="Ensure only active-charging EVs occupy designated charging spots. Detect non-EV vehicles blocking chargers and alert building management immediately."
              tags={["EV DETECTION", "CHARGER OPS"]}
            />
            <UseCaseCard 
              icon={<MapPin className="w-6 h-6" />}
              title="Park-and-Exit Tracking"
              description="Monitor vehicles entering and exiting the premises on foot. Identify long-term parkers who left without returning, blocking traffic lanes and fire access."
              tags={["ENTRY/EXIT LOG", "DURATION ALERTS"]}
            />
            <UseCaseCard 
              icon={<ClipboardCheck className="w-6 h-6" />}
              title="Vendor & Contractor Verification"
              description="Track vendor arrival and departure times. Automatically log when vendor vehicles arrive and leave, matching plates to known contractors. Dispute invoices with hard evidence."
              tags={["VENDOR LOGS", "INVOICE EVIDENCE"]}
            />
            <UseCaseCard 
              icon={<Thermometer className="w-6 h-6" />}
              title="Ice, Snow & Water Detection"
              description="Monitor lot for ice, standing water, and snow accumulation before someone slips. Trigger notifications to your snow removal vendor the moment conditions appear."
              tags={["HAZARD ALERT", "LIABILITY PROTECTION"]}
            />
            <UseCaseCard 
              icon={<Construction className="w-6 h-6" />}
              title="Pavement & Pothole Monitoring"
              description="Detect forming cracks, potholes, and pavement damage before they become liability claims. Automated visual inspection runs 24/7 so you never miss degradation."
              tags={["PAVEMENT AI", "MAINTENANCE ALERT"]}
            />
            <UseCaseCard 
              icon={<Trash2 className="w-6 h-6" />}
              title="Trash & Foreign Object Detection"
              description="Detect overflowing trash bins, illegal dumping, or foreign objects blocking traffic lanes and fire access. Timestamped evidence for lease violation documentation."
              tags={["OVERFLOW ALERT", "LANE OBSTRUCTION"]}
            />
            <UseCaseCard 
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Slip-and-Fall Claim Defense"
              description="When a claimant alleges injury, retrieve timestamped video of the exact location and time. Verify whether hazardous conditions existed — or whether the claim is fabricated."
              tags={["VIDEO EVIDENCE", "TIMESTAMP PROOF"]}
            />
            <UseCaseCard 
              icon={<FileText className="w-6 h-6" />}
              title="Lease Violation Documentation"
              description="Dumpster overflow, blocked access, unauthorized storage, after-hours operations — automated visual inspection runs 24/7 so you have evidence without driving to the site."
              tags={["AUTO-DOCS", "LEASE ENFORCEMENT"]}
            />
            <UseCaseCard 
              icon={<BarChart3 className="w-6 h-6" />}
              title="Traffic & Footfall Analytics"
              description="See when your lot and entry roads are busiest. Give tenants data on peak hours, occupancy trends, and traffic patterns. Turn LotIQ from a cost into a tenant retention tool."
              tags={["OCCUPANCY TRENDS", "TENANT REPORTS"]}
            />
            <UseCaseCard 
              icon={<Navigation className="w-6 h-6" />}
              title="Intersection & Road Traffic Monitoring"
              description="Monitor vehicle flow into and out of your property. Identify peak ingress/egress times for retail, office, and mixed-use properties. Share with tenants as a business intelligence perk."
              tags={["TRAFFIC FLOW", "BUSINESS INTEL"]}
            />
            <UseCaseCard 
              icon={<Lightbulb className="w-6 h-6" />}
              title="Lighting & Infrastructure Monitoring"
              description="Detect outages in parking lot lighting before tenants or claimants discover them. Dark spots are both a safety risk and a liability exposure — LotIQ catches them proactively."
              tags={["LIGHT OUTAGE", "SAFETY ALERT"]}
            />
          </div>
        </div>
      </section>

      {/* Platform Deep Dive */}
      <section id="platform" className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Platform Deep Dive</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">Real-time intelligence, <span className="text-blue-600">not just recordings</span></h2>
            <p className="text-slate-600 max-w-2xl text-lg">
              Legacy cameras record. LotIQ understands — detecting, classifying, and alerting within seconds of any event.
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">Parking Enforcement</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Reserved spots that <span className="text-blue-600">enforce themselves</span></h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Property managers spend hours chasing down parking violations. LotIQ handles it end-to-end — from detection to documented tow request — without a single phone call.
                </p>
                <ul className="space-y-4">
                  <FeatureListItem text="License plate AI matches vehicles against tenant registries in under 5 seconds" />
                  <FeatureListItem text="Violation detected -> photo captured -> tow company notified automatically" />
                  <FeatureListItem text="EV spots protected from ICE vehicles blocking chargers" />
                  <FeatureListItem text="Park-and-sell tracking for retail and mixed-use properties" />
                  <FeatureListItem text="Contractor time logs for vendor invoice verification" />
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold">Spot A2 — Honda CRV</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">09:14</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-xs font-bold text-red-700">Spot A3 — BMW 3 Series</span>
                    </div>
                    <span className="text-[10px] font-bold text-red-600 uppercase">Violation</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold">EV Spot E1 — Toyota Camry</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">09:32</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold">Zone C — Ice patch detected</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">08:12</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="text-xs font-bold text-amber-700">Trash Area — Overflow threshold reached</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">07:45</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold">Lane 2 — Foreign object blocking</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">08:30</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">Lot Condition</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Catch hazards <span className="text-blue-600">before someone falls</span></h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Slip-and-fall claims cost property owners thousands. LotIQ's AI vision detects hazardous conditions the moment they form — and immediately creates a timestamped record.
                </p>
                <ul className="space-y-4">
                  <FeatureListItem text="Ice, water, and snow detection with automatic vendor notification" />
                  <FeatureListItem text="Pothole and pavement crack detection before tenant complaints" />
                  <FeatureListItem text="Trash overflow and illegal dumping alerts" />
                  <FeatureListItem text="Foreign object and lane obstruction detection" />
                  <FeatureListItem text="Every detection auto-archived as timestamped evidence" />
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">Liability Protection</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Evidence that <span className="text-blue-600">protects you</span></h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  When a claimant alleges they fell on your property, you need more than a guess. LotIQ gives your legal team a timestamped, AI-verified record of exactly what your lot looked like at any moment.
                </p>
                <ul className="space-y-4">
                  <FeatureListItem text="Query any camera, any time range — video retrieved in seconds" />
                  <FeatureListItem text="AI-annotated condition timeline shows what was detected and when" />
                  <FeatureListItem text="Vendor treatment logs match against hazard detection timestamps" />
                  <FeatureListItem text="Export full evidence packages directly to PDF for legal teams" />
                  <FeatureListItem text="Protects against fraudulent claims with irrefutable visual proof" />
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <div className="border border-slate-100 rounded-xl overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Evidence Request — Slip & Fall Claim</span>
                    <span className="text-[10px] text-slate-400">Feb 12, 2026</span>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Claim Defense Package Ready</div>
                        <div className="text-[10px] text-slate-500">3 video clips • condition timeline • vendor treatment log</div>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-xs font-bold">Export to PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">How it Works</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">Up and running in <span className="text-blue-600">days, not months</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              LotIQ works with your existing cameras. No rip-and-replace. No lengthy install projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              number="01"
              title="Connect Your Cameras"
              description="LotIQ integrates with any RTSP-compatible IP camera or CCTV system. Works with new or existing infrastructure."
            />
            <StepCard 
              number="02"
              title="Configure Your Rules"
              description="Map out your zones, define authorized vehicles per spot, set hazard detection thresholds, and configure alert recipients."
            />
            <StepCard 
              number="03"
              title="AI Goes to Work"
              description="LotIQ's computer vision runs 24/7 — detecting violations, hazards, traffic patterns, and incidents in real time."
            />
            <StepCard 
              number="04"
              title="You Get Alerts & Evidence"
              description="Receive instant push/email/SMS alerts. Every event is timestamped, archived, and searchable — ready for enforcement or legal review."
            />
          </div>
        </div>
      </section>

      {/* Built for Scale Section */}
      <section id="stack" className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Built for Scale</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">Powered by <span className="text-blue-600">AWS infrastructure</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Enterprise-grade reliability with a serverless architecture that scales from one lot to hundreds of properties without configuration changes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <StackItem name="Amazon Rekognition" description="Computer vision & object detection" />
            <StackItem name="AWS Lambda" description="Serverless event processing" />
            <StackItem name="Amazon S3" description="Durable, encrypted video and image storage" />
            <StackItem name="Amazon DynamoDB" description="Low-latency tenant registry and violation event ledger" />
            <StackItem name="Amazon SNS / SES" description="Real-time push, SMS, and email alerts" />
            <StackItem name="Amazon CloudFront" description="Global CDN for low-latency video delivery" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">From Property Managers</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">People who manage <span className="text-blue-600">lots every day</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I like this — LotIQ telling you the state of the property grounds in real time. You should be pushing 'complete lot knowledge,' not just parking monitoring."
              author="Adam R."
              role="Asset Manager, Eastport Real Estate Services"
            />
            <TestimonialCard 
              quote="Contractors self-report their hours and we've had zero way to verify it. If LotIQ can auto-log when vendor vehicles arrive and leave, that alone saves money on every invoice."
              author="Bob K."
              role="Commercial Property Owner"
            />
            <TestimonialCard 
              quote="The slip-and-fall claim use case is the one that really got my attention. We deal with fabricated claims constantly and having timestamped video evidence changes everything."
              author="Vikram S."
              role="LotIQ Co-Founder"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Leadership</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">Built by operators who <span className="text-blue-600">understand property</span></h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-200">
                <img 
                  src="https://picsum.photos/seed/vikram/400/400" 
                  alt="Vikram Singh" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">Vikram Singh</h3>
                <div className="text-blue-600 font-bold text-sm mb-6 uppercase tracking-wider">CEO & Co-Founder • LotIQ</div>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Vikram is a seasoned P&L leader with a track record across high-growth companies including Flexcar (CEO), Lowe's, and Amazon. He has founded and advised multiple AI startups and brings deep operational expertise to solving real-world property management challenges. LotIQ is his vision for giving property managers the intelligence layer their lots have always needed.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    <Mail className="w-4 h-4" /> [email protected]
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent)]" />
          <div className="relative z-10">
            <span className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-6 block">Get Started</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">See your lot the way <br /> <span className="text-blue-200">it was meant to be seen</span></h2>
            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Request a live demo — we'll show you how LotIQ on a real property in under 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-xl">
                Request Demo
              </button>
              <button className="w-full sm:w-auto bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-800 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">LotIQ</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Next-generation AI property intelligence for modern commercial real estate.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Use Cases</a></li>
                <li><a href="#" className="hover:text-blue-600">How it Works</a></li>
                <li><a href="#" className="hover:text-blue-600">Technology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
            <div className="text-xs text-slate-400">© 2026 LotIQ Technologies Inc. All rights reserved.</div>
            <div className="text-xs text-slate-400">Austin, Texas</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function UseCaseCard({ icon, title, description, tags }: { icon: React.ReactNode, title: string, description: string, tags: string[] }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
      <span className="text-sm text-slate-600 leading-relaxed">{text}</span>
    </li>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative">
      <div className="text-6xl font-black text-slate-100 absolute -top-4 -left-2 z-0">{number}</div>
      <div className="relative z-10 pt-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function StackItem({ name, description }: { name: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="text-xs font-bold text-slate-900 mb-2">{name}</div>
      <div className="text-[10px] text-slate-500 leading-tight">{description}</div>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
      <div className="text-4xl text-blue-200 font-serif absolute top-4 left-4">“</div>
      <p className="text-slate-700 italic leading-relaxed mb-8 relative z-10">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
          {author[0]}
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">{author}</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{role}</div>
        </div>
      </div>
    </div>
  );
}
