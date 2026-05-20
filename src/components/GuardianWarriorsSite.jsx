import React from 'react';
import { motion } from 'framer-motion';
import {
	Shield,
	Star,
	HeartHandshake,
	Leaf,
	Home,
	Users,
	Gem,
	Globe2,
	Camera,
	ArrowRight,
	Mail,
	Building2,
	Sparkles,
	Award,
	HeartPulse,
} from 'lucide-react';

const fadeUp = {
	hidden: { opacity: 0, y: 28 },
	visible: { opacity: 1, y: 0 },
};

const Section = ({ id, eyebrow, title, children, className = '' }) => (
	<section id={id} className={`relative px-6 py-24 md:px-12 lg:px-20 ${className}`}>
		<div className="mx-auto max-w-7xl">
			{eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.32em] text-cyan-300">{eyebrow}</p>}
			{title && <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h2>}
			<div className="mt-10">{children}</div>
		</div>
	</section>
);

const Card = ({ icon: Icon, title, children }) => (
	<motion.div
		variants={fadeUp}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.25 }}
		transition={{ duration: 0.55 }}
		className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur"
	>
		{Icon && <Icon className="mb-5 h-8 w-8 text-amber-300" />}
		<h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
		<p className="leading-7 text-slate-300">{children}</p>
	</motion.div>
);

const Pill = ({ children }) => (
	<span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">{children}</span>
);

export default function GuardianWarriorsSite() { return <main className="gw-main min-h-screen w-full max-w-none bg-[#070911] text-slate-100"><nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070911]/80 px-6 py-4 backdrop-blur-xl md:px-12 lg:px-20"><div className="mx-auto flex max-w-7xl items-center justify-between"><a href="#home" className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/40 bg-amber-300/10"><Shield className="h-6 w-6 text-amber-300" /></div><div><div className="text-sm font-semibold tracking-[0.24em] text-white">GUARDIAN WARRIORS</div><div className="text-[10px] uppercase tracking-[0.22em] text-amber-300">Defend · Empower · Transform</div></div></a><div className="hidden items-center gap-7 text-sm text-slate-300 md:flex"><a href="#mission" className="hover:text-white">Mission</a><a href="#hollywood" className="hover:text-white">Hollywood for Heroes</a><a href="#partners" className="hover:text-white">Partners</a><a href="#impact" className="hover:text-white">Impact</a><a href="#contact" className="rounded-full border border-amber-300/50 px-4 py-2 text-amber-200 hover:bg-amber-300/10">Connect</a></div></div></nav><header id="home" className="relative overflow-hidden px-6 pb-28 pt-36 md:px-12 lg:px-20 lg:pt-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,190,255,0.18),transparent_32%),radial-gradient(circle_at_30%_80%,rgba(245,180,64,0.16),transparent_34%)]" /><div className="absolute inset-0 opacity-35" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)', backgroundSize: '44px 44px' }} /><div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]"><motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}><p className="mb-5 text-xs uppercase tracking-[0.35em] text-cyan-300">Luxury Impact Platform · Veteran Transformation · Awards Season 2027</p><h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">Hollywood for Heroes</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">A cinematic nonprofit platform uniting luxury design, sustainability, wellness, cultural influence, and transformational support for 100% service-disabled veterans and their families.</p><div className="mt-9 flex flex-wrap gap-4"><a href="#partners" className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-300/20">Explore Partnerships <ArrowRight className="h-4 w-4" /></a><a href="#mission" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/5">View Mission</a></div></motion.div><motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative"><div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5 shadow-2xl shadow-cyan-950/40"><div className="rounded-[1.5rem] border border-amber-300/25 bg-[#0d1324] p-8"><div className="flex items-center justify-between"><Star className="h-10 w-10 text-amber-300" /><span className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-200">Awards Season 2027</span></div><div className="mt-16 space-y-5"><div className="h-2 w-2/3 rounded-full bg-cyan-300/70" /><div className="h-2 w-5/6 rounded-full bg-white/20" /><div className="h-2 w-1/2 rounded-full bg-amber-300/70" /></div><div className="mt-16 grid grid-cols-2 gap-4">{['Luxury Design', 'Circular Impact', 'Veteran Homes', 'Cultural Influence'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">{item}</div>)}</div></div></div></motion.div></div></header><Section id="mission" eyebrow="Mission" title="Transforming environments. Restoring dignity. Building legacies."><div className="grid gap-6 md:grid-cols-3"><Card icon={Home} title="Adaptive Homes">Luxury-quality, accessible living environments that improve safety, dignity, independence, and daily quality of life.</Card><Card icon={HeartPulse} title="Wellness & Family Support">Programs and partnerships that strengthen veterans and families across physical, emotional, and long-term wellness needs.</Card><Card icon={Sparkles} title="Purpose-Driven Innovation">Smart-home, design, sustainability, and technology partnerships that create lasting transformation.</Card></div></Section><Section id="hollywood" eyebrow="Signature Platform" title="Hollywood for Heroes turns cultural attention into measurable impact."><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]"><div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"><h3 className="text-2xl font-semibold text-white">Awards Season 2027 Vision</h3><p className="mt-4 leading-8 text-slate-300">An invitation-only luxury impact experience during one of the world's most visible cultural weeks. The platform is designed for meaningful conversations, elevated hospitality, brand alignment, and transformational veteran support.</p><div className="mt-7 flex flex-wrap gap-3"><Pill>Private Hospitality</Pill><Pill>Celebrity Advocacy</Pill><Pill>Luxury Design</Pill><Pill>Mission Storytelling</Pill></div></div><div className="grid gap-6 md:grid-cols-2"><Card icon={Award} title="Cultural Influence">Use high-visibility moments to elevate stories of service, resilience, and transformation.</Card><Card icon={Gem} title="Luxury Alignment">Create brand-safe, premium engagement for design, wellness, hospitality, and ESG partners.</Card></div></div></Section><Section id="partners" eyebrow="Partnership Ecosystem" title="A curated coalition of luxury, sustainability, media, and mission-aligned partners."><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"><Card icon={Building2} title="Poggenpohl Integration">Luxury kitchen and architectural environments as signature hospitality and design showcases.</Card><Card icon={Leaf} title="Aurora Circ">Circular luxury architectural assets that extend product life, reduce waste, and create elevated impact environments.</Card><Card icon={Globe2} title="Sustainable Angel">Purpose-driven sustainability, innovation, and conscious luxury partnership strategy.</Card><Card icon={Camera} title="Media & PR">Editorial storytelling, cultural visibility, social amplification, and documentary-style transformation narratives.</Card></div></Section><Section id="impact" eyebrow="Impact Model" title="Where donor capital, brand value, and circular luxury become veteran transformation."><div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 md:p-10"><div className="grid gap-6 md:grid-cols-3"><Card icon={HeartHandshake} title="Input">Donor capital, luxury brand partnerships, in-kind design assets, media support, and professional services.</Card><Card icon={Shield} title="Activation">Guardian Warriors curates, verifies, deploys, and communicates projects through trusted partners.</Card><Card icon={Users} title="Outcome">Veteran home transformation, family support, community impact, and long-term quality-of-life improvement.</Card></div></div></Section><Section id="esg" eyebrow="ESG & Sustainability" title="Responsible luxury with measurable social and environmental value."><div className="grid gap-6 md:grid-cols-3"><Card icon={Leaf} title="Environmental">Circular design, reuse, repurposing, resource efficiency, and reduced material waste.</Card><Card icon={Users} title="Social">Veteran transformation, community investment, family support, health, wellness, and dignity.</Card><Card icon={Shield} title="Governance">Transparent reporting, ethical partnerships, accountable stewardship, and donor confidence.</Card></div></Section><Section id="contact" eyebrow="Invitation" title="Partner with Guardian Warriors to build a legacy of purpose."><div className="grid gap-8 lg:grid-cols-[1fr_.8fr]"><div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-8"><p className="text-xl leading-9 text-slate-100">We are seeking visionary partners who understand that modern philanthropy can be cinematic, strategic, emotionally intelligent, and culturally relevant. Together, we can transform luxury influence into meaningful veteran impact.</p></div><div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"><h3 className="text-2xl font-semibold text-white">Contact</h3><p className="mt-3 text-slate-300">Use this section for donor, partner, media, and luxury brand inquiries.</p><a href="mailto:info@guardianwarriors.org" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950"><Mail className="h-4 w-4" /> info@guardianwarriors.org</a></div></div></Section><footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"><p>© 2027 Guardian Warriors. All rights reserved.</p><p>Hollywood for Heroes · Luxury Impact Experience</p></div></footer></main>; }
