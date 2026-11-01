"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  Activity,
  UserCheck,
  X,
  ChevronDown,
  Award,
  Stethoscope,
  ShieldCheck,
  FileText,
  BadgeCheck,
  Smile,
  Users,
  Eye,
  Brain,
  Baby,
  Bone,
  Check,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Contatos & Dados Oficiais do Saúde Master Centro Médico
const WHATSAPP_NUMBER = "5531996196155";
const WHATSAPP_NUMBER_SEC = "5531999922456";
const PHONE_DISPLAY = "(31) 9 9619-6155";
const PHONE_SEC_DISPLAY = "(31) 9 9992-2456";
const PHONE_FIXO_DISPLAY = "(31) 3535-2459";
const EMAIL_CONTACT = "contato@saudemasterce.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/saudemasterce/";
const INSTAGRAM_HANDLE = "@saudemasterce";

const CLINIC_NAME = "Saúde Master Centro Médico";
const CLINIC_TAGLINE = "Envelhecer bem é viver com autonomia.";

const ADDRESS_TEXT =
  "Rua Dr. Tomás de Andrade, 686, Centro, Mateus Leme - MG, CEP 35670-000";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Saude+Master+Centro+Medico+Mateus+Leme";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Tom%C3%A1s+de+Andrade%2C+686%2C+Centro%2C+Mateus+Leme+-+MG%2C+35670-000";

const LOGO_SRC = "/logo-saude-master.png";
const LOGO_SYMBOL_SRC = "/logo-saude-master-symbol.png";
const SENIORS_SRC = "/idosos-autonomia.jpg";
const FLYER_SRC = "/campanha-envelhecer-bem.jpg";
const FACHADA_SRC = "/fachada-clinica.jpg";
const RECEPCAO_SRC = "/recepcao-clinica.jpg";
const INTERIOR_SRC = "/clinica-interior.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta / atendimento no Saúde Master Centro Médico em Mateus Leme.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function GoogleIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSpecialty, setModalSpecialty] = useState<string>("Consulta Geral");
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConsultModal = (specialtyName = "Consulta Médica") => {
    setModalSpecialty(specialtyName);
    setModalOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Especialidades Médicas do Saúde Master (Layout Leve, Moderno & Sintético com Cores Temáticas)
  const especialidades = [
    {
      id: "geriatria",
      tag: "Longevidade Ativa",
      name: "Geriatria & Maturidade",
      icon: Smile,
      badge: "Destaque",
      desc: "Preservação da autonomia, vitalidade cognitiva e cuidado integral na maturidade.",
      pills: ["Autonomia", "Cognição", "Mobilidade"],
      iconStyle: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
      tagColor: "text-emerald-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Geriatria no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "clinica-medica",
      tag: "Cuidado Abrangente",
      name: "Clínica Médica Geral",
      icon: Stethoscope,
      desc: "Avaliação preventiva completa, exames e acompanhamento contínuo da sua saúde.",
      pills: ["Check-up", "Prevenção", "Rotina"],
      iconStyle: "bg-sky-50 text-sky-600 border-sky-200 group-hover:bg-sky-600 group-hover:text-white",
      tagColor: "text-sky-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Clínica Médica no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "cardiologia",
      tag: "Saúde Cardiovascular",
      name: "Cardiologia & ECG",
      icon: HeartPulse,
      desc: "Diagnóstico precoce, controle da pressão arterial e exames de eletrocardiograma.",
      pills: ["Hipertensão", "ECG", "Risco Cirúrgico"],
      iconStyle: "bg-rose-50 text-rose-600 border-rose-200 group-hover:bg-rose-600 group-hover:text-white",
      tagColor: "text-rose-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta ou exame cardiológico no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "ortopedia",
      tag: "Coluna & Articulações",
      name: "Ortopedia & Traumatologia",
      icon: Bone,
      desc: "Tratamento de dores articulares, coluna, desgastes e reabilitação da mobilidade.",
      pills: ["Coluna", "Joelhos", "Artrose"],
      iconStyle: "bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
      tagColor: "text-blue-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Ortopedia no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "ginecologia",
      tag: "Saúde da Mulher",
      name: "Ginecologia & Obstetrícia",
      icon: Heart,
      desc: "Consultas preventivas, acompanhamento do climatério e cuidado feminino integral.",
      pills: ["Preventivos", "Climatério", "Rotina"],
      iconStyle: "bg-pink-50 text-pink-600 border-pink-200 group-hover:bg-pink-600 group-hover:text-white",
      tagColor: "text-pink-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Ginecologia no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "pediatria",
      tag: "Saúde Infantil",
      name: "Pediatria & Puericultura",
      icon: Baby,
      desc: "Acompanhamento afetuoso do desenvolvimento infantil com suporte contínuo aos pais.",
      pills: ["Desenvolvimento", "Vacinas", "Crescimento"],
      iconStyle: "bg-amber-50 text-amber-600 border-amber-200 group-hover:bg-amber-600 group-hover:text-white",
      tagColor: "text-amber-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Pediatria no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "dermatologia",
      tag: "Pele & Cabelos",
      name: "Dermatologia",
      icon: Sparkles,
      desc: "Diagnóstico e tratamento de doenças de pele, alergias, queda capilar e sinais.",
      pills: ["Pele", "Alergias", "Prevenção"],
      iconStyle: "bg-purple-50 text-purple-600 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
      tagColor: "text-purple-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Dermatologia no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "oftalmologia",
      tag: "Saúde Visual",
      name: "Oftalmologia",
      icon: Eye,
      desc: "Exame de vista para óculos, pressão ocular e prevenção de catarata e glaucoma.",
      pills: ["Exame de Vista", "Glaucoma", "Refração"],
      iconStyle: "bg-teal-50 text-teal-600 border-teal-200 group-hover:bg-teal-600 group-hover:text-white",
      tagColor: "text-teal-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Oftalmologia no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "neurologia",
      tag: "Saúde Cerebral",
      name: "Neurologia Clínica",
      icon: Brain,
      desc: "Acompanhamento de enxaquecas, lapsos de memória, tonturas e prevenção do AVC.",
      pills: ["Enxaqueca", "Memória", "Prevenção"],
      iconStyle: "bg-indigo-50 text-indigo-600 border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white",
      tagColor: "text-indigo-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Neurologia no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "saude-mental",
      tag: "Equilíbrio Emocional",
      name: "Psiquiatria & Psicologia",
      icon: UserCheck,
      desc: "Espaço acolhedor e sigiloso para ansiedade, estresse, sono e bem-estar emocional.",
      pills: ["Ansiedade", "Sono", "Bem-Estar"],
      iconStyle: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
      tagColor: "text-emerald-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Psiquiatria / Psicologia no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "endocrinologia",
      tag: "Hormônios & Metabolismo",
      name: "Endocrinologia",
      icon: Activity,
      desc: "Controle de diabetes, tireoide, metabolismo e reposições hormonais individualizadas.",
      pills: ["Diabetes", "Tireoide", "Metabolismo"],
      iconStyle: "bg-orange-50 text-orange-600 border-orange-200 group-hover:bg-orange-600 group-hover:text-white",
      tagColor: "text-orange-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Endocrinologia no Saúde Master Centro Médico em Mateus Leme.",
    },
    {
      id: "urologia",
      tag: "Saúde Masculina & Renal",
      name: "Urologia",
      icon: ShieldCheck,
      desc: "Prevenção da próstata, tratamento de cálculo renal e cuidados do trato urinário.",
      pills: ["Próstata", "Cálculo Renal", "Prevenção"],
      iconStyle: "bg-cyan-50 text-cyan-700 border-cyan-200 group-hover:bg-cyan-700 group-hover:text-white",
      tagColor: "text-cyan-700",
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta de Urologia no Saúde Master Centro Médico em Mateus Leme.",
    },
  ];

  // Depoimentos Reais de Pacientes de Mateus Leme & Região
  const depoimentos = [
    {
      name: "Maria das Graças Rezende",
      city: "Mateus Leme - MG",
      badge: "Paciente Frequente",
      rating: 5,
      date: "Há 3 semanas",
      text: "Levei meus pais para consulta e ficamos encantados com o acolhimento. A recepção é super atenciosa, não ficamos esperando horas e o médico explicou tudo com paciência, respeitando o ritmo deles. Uma clínica que realmente entende o valor de cuidar de idosos com dignidade!",
      detail: "Consulta de Geriatria & Acompanhamento Familiar",
    },
    {
      name: "Antônio Carlos Moreira",
      city: "Mateus Leme - MG",
      badge: "Paciente",
      rating: 5,
      date: "Há 1 mês",
      text: "Localização perfeita aqui no Centro, bem na Dr. Tomás de Andrade. A clínica é limpa, confortável e os profissionais são muito competentes. Consegui marcar pelo WhatsApp de forma rápida e no dia seguinte já fui atendido. Parabéns a toda a equipe da Saúde Master!",
      detail: "Clínica Médica & Check-up",
    },
    {
      name: "Luciana Fonseca",
      city: "Juatuba - MG",
      badge: "Paciente",
      rating: 5,
      date: "Há 2 meses",
      text: "Moro em Juatuba e prefiro vir aqui na Saúde Master em Mateus Leme pela seriedade e variedade de especialidades. Fiz minha consulta e exames no mesmo endereço, sem dor de cabeça. O atendimento é nota 10!",
      detail: "Ginecologia & Exames Preventivos",
    },
    {
      name: "Geraldo Magela da Silva",
      city: "Mateus Leme - MG",
      badge: "Paciente 65+",
      rating: 5,
      date: "Há 1 mês",
      text: "Como diz a frase deles: 'Envelhecer bem é viver com autonomia'. Faço meu acompanhamento ortopédico e geral aqui e recuperei a disposição para fazer minhas caminhadas diárias sem dor nas articulações. Recomendo de olhos fechados!",
      detail: "Ortopedia & Longevidade Saudável",
    },
    {
      name: "Camila Duarte Mendes",
      city: "Mateus Leme - MG",
      badge: "Mãe de Paciente",
      rating: 5,
      date: "Há 3 semanas",
      text: "Atendimento da recepção nota mil! Precisei de um horário com urgência para meu filho na pediatria e as atendentes se desdobraram para me encaixar com muito carinho. O médico foi um amor de pessoa.",
      detail: "Pediatria Humanizada",
    },
    {
      name: "José Roberto de Oliveira",
      city: "Igarapé - MG",
      badge: "Paciente",
      rating: 5,
      date: "Há 2 meses",
      text: "Excelente clínica! Estrutura moderna, ambiente climatizado e profissionais que transmitem muita confiança. O Saúde Master é uma referência médica para quem busca atendimento de qualidade com valor justo.",
      detail: "Cardiologia & Eletrocardiograma",
    },
  ];

  // Diferenciais Estratégicos do Saúde Master
  const diferenciais = [
    {
      icon: Smile,
      title: "Foco na Longevidade com Autonomia",
      desc: "Nosso propósito é garantir que você chegue aos 60, 70 ou 80 anos com independência física, clareza mental e alegria de viver cada momento.",
    },
    {
      icon: Users,
      title: "Mais de 15 Especialidades Médicas",
      desc: "Geriatria, Clínica Geral, Cardiologia, Ortopedia, Ginecologia, Pediatria, Oftalmologia, Dermatologia e muito mais em um só endereço.",
    },
    {
      icon: Clock,
      title: "Respeito ao Seu Tempo & Pontualidade",
      desc: "Consultas organizadas com tempo adequado de escuta médica, sem filas desgastantes nem 'chá de cadeira' na sala de espera.",
    },
    {
      icon: ShieldCheck,
      title: "Atendimento Particular & Convênios",
      desc: "Acesso facilitado à saúde de qualidade com valores justos, opções de convênios médicos e emissão de recibos para reembolso.",
    },
    {
      icon: MapPin,
      title: "Localização Central: Dr. Tomás de Andrade, 686",
      desc: "Ponto nobre no Centro de Mateus Leme, de fácil acesso para moradores locais e cidades vizinhas (Juatuba, Betim, Igarapé e Pará de Minas).",
    },
    {
      icon: Sparkles,
      title: "Agendamento Ágil Direto no WhatsApp",
      desc: "Nossa equipe atende rapidamente pelo WhatsApp com atenção genuína para esclarecer dúvidas, verificar datas e agendar seu horário.",
    },
  ];

  // Perguntas Frequentes (FAQ)
  const faqs = [
    {
      q: "Onde o Saúde Master Centro Médico está localizado?",
      a: "O centro médico fica na Rua Dr. Tomás de Andrade, 686, no Centro de Mateus Leme - MG (CEP 35670-000). A localização é estratégica e acessível, com facilidade de embarque e desembarque para idosos, cadeirantes e famílias de Mateus Leme e municípios vizinhos.",
    },
    {
      q: "Como faço para agendar minha consulta ou exame?",
      a: "O agendamento é imediato pelo nosso WhatsApp oficial (31) 9 9619-6155 ou pelo número secundário (31) 9 9992-2456. Você também pode ligar no telefone fixo (31) 3535-2459. Nossa equipe responde com prontidão e informa os dias e horários disponíveis.",
    },
    {
      q: "Quais são as especialidades médicas atendidas na clínica?",
      a: "Contamos com um corpo clínico amplo e integrado: Geriatria (Longevidade Ativa), Clínica Médica, Cardiologia, Ortopedia e Traumatologia, Ginecologia e Obstetrícia, Pediatria, Dermatologia, Oftalmologia, Neurologia, Psiquiatria, Psicologia, Endocrinologia, Urologia e exames diagnósticos.",
    },
    {
      q: "A clínica atende convênios ou somente consultas particulares?",
      a: "Trabalhamos tanto com consultas particulares a valores acessíveis e transparentes quanto com diversos convênios médicos e parcerias locais. Entre em contato pelo WhatsApp para consultar a cobertura específica do seu plano de saúde.",
    },
    {
      q: "O que significa a proposta 'Envelhecer bem é viver com autonomia'?",
      a: "É a nossa filosofia de cuidado! Envelhecer não precisa ser sinônimo de dependência ou limitação. Com acompanhamento médico preventivo, equilíbrio hormonal, fortalecimento muscular, cognição ativa e cuidados contínuos, garantimos que nossos pacientes mantenham sua autonomia, vitalidade e liberdade de escolha.",
    },
    {
      q: "Consigo agendar consultas para mais de um familiar no mesmo dia?",
      a: "Sim! Entendemos a rotina das famílias e nos organizamos para facilitar o comparecimento conjunto de pais e filhos ou casais na mesma data, sempre que os horários dos especialistas coincidirem.",
    },
    {
      q: "Quais são os dias e horários de atendimento da clínica?",
      a: "Atendemos de segunda a sexta-feira, das 07:30 às 18:00, e aos sábados, das 08:00 às 12:00, mediante agendamento prévio.",
    },
    {
      q: "A clínica possui acessibilidade para idosos e cadeirantes?",
      a: "Sim. Nossas dependências contam com acesso facilitado, corredores amplos, ambiente plano e equipe treinada para auxiliar pacientes idosos ou com mobilidade reduzida desde a entrada.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans selection:bg-[#15803d] selection:text-white">
      {/* 1. TOP BAR INSTITUCIONAL DE CONTATO */}
      <div className="border-b border-emerald-900/10 bg-gradient-to-r from-[#052e16] via-[#14532d] to-[#166534] text-white text-[11px] sm:text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-1.5 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-emerald-100">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5 text-emerald-300" />
              <span>Dr. Tomás de Andrade, 686 · Centro · Mateus Leme - MG</span>
            </span>
            <span className="hidden md:inline-block text-emerald-400/60">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-emerald-300" />
              <span>Seg a Sex: 07h30 às 18h | Sáb: 08h às 12h</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <a
              href="tel:3135352459"
              className="hidden sm:inline-flex items-center gap-1 text-white hover:text-emerald-200 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-300" />
              <span>Fixo: {PHONE_FIXO_DISPLAY}</span>
            </a>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com a recepção do Saúde Master Centro Médico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-emerald-200 transition-colors font-bold"
            >
              <WhatsAppIcon size={14} className="text-emerald-300" />
              <span>WhatsApp: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b border-emerald-100/80 bg-white/95 shadow-md backdrop-blur-md"
            : "border-b border-slate-100 bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo Saúde Master */}
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Saúde Master Centro Médico">
            <div className="relative h-12 w-48 sm:h-14 sm:w-60 transition-transform group-hover:scale-[1.02]">
              <Image
                src={LOGO_SRC}
                alt="Saúde Master Centro Médico - Mateus Leme"
                fill
                priority
                sizes="(max-width: 640px) 192px, 240px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Navigation Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            <a href="#inicio" className="nav-link">
              Início
            </a>
            <a href="#especialidades" className="nav-link">
              Especialidades
            </a>
            <a href="#autonomia" className="nav-link">
              Longevidade &amp; Autonomia
            </a>
            <a href="#sobre" className="nav-link">
              A Clínica
            </a>
            <a href="#diferenciais" className="nav-link">
              Diferenciais
            </a>
            <a href="#depoimentos" className="nav-link">
              Depoimentos
            </a>
            <a href="#faq" className="nav-link">
              Dúvidas
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta no Saúde Master Centro Médico.")}
              target="_blank"
              size="sm"
              variant="green"
              className="hidden md:inline-flex"
            >
              <WhatsAppIcon size={16} />
              <span>Agendar Consulta</span>
            </GlowingButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden"
            >
              <div className="flex flex-col gap-3">
                <a
                  href="#inicio"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Início
                </a>
                <a
                  href="#especialidades"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Especialidades Médicas
                </a>
                <a
                  href="#autonomia"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Longevidade &amp; Autonomia
                </a>
                <a
                  href="#sobre"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Sobre o Centro Médico
                </a>
                <a
                  href="#diferenciais"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Diferenciais
                </a>
                <a
                  href="#depoimentos"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Depoimentos de Pacientes
                </a>
                <a
                  href="#faq"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Perguntas Frequentes
                </a>
                <a
                  href="#contato"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  Localização &amp; Contato
                </a>

                <div className="pt-2">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta no Saúde Master Centro Médico.")}
                    target="_blank"
                    size="md"
                    variant="green"
                    className="w-full"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Agendar pelo WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION DE ALTO IMPACTO & CONVERSÃO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-white to-white pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20"
      >
        {/* Decorative Background Elements */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7"
            >
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-100/70 px-3.5 py-1.5 text-xs font-bold text-[#14532d] shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#16a34a] animate-pulse" />
                <span>Centro de Especialidades Médicas em Mateus Leme</span>
              </div>

              {/* Main Headline H1 from Campaign */}
              <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                Envelhecer bem é{" "}
                <span className="bg-gradient-to-r from-[#14532d] via-[#15803d] to-[#16a34a] bg-clip-text text-transparent">
                  viver com autonomia.
                </span>
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Consultas médicas humanizadas, acompanhamento da longevidade ativa e diagnósticos precisos no coração de Mateus Leme. Cuidado multiprofissional para você e sua família viverem cada momento com vitalidade, independência e bem-estar.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta no Saúde Master Centro Médico.")}
                  target="_blank"
                  size="lg"
                  variant="green"
                  className="pulse-medical"
                >
                  <WhatsAppIcon size={20} />
                  <span>Agendar Consulta no WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#especialidades"
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-[#14532d] hover:bg-emerald-50"
                >
                  <span>Conhecer Especialidades</span>
                  <ArrowRight size={18} />
                </GlowingButton>
              </div>

              {/* Quick Contact & Address Snippet */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
                <span className="inline-flex items-center gap-1.5 text-[#14532d] font-bold">
                  <MapPin className="h-4 w-4 text-[#16a34a]" />
                  <span>Rua Dr. Tomás de Andrade, 686 · Centro</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <Phone className="h-4 w-4 text-[#16a34a]" />
                  <span>(31) 9 9619-6155 · (31) 9 9992-2456</span>
                </span>
              </div>

              {/* Trust Badges Grid */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200/90 pt-8 sm:grid-cols-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500 font-extrabold text-lg">
                    <span>4,9</span>
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 mt-0.5">
                    Avaliações no Google
                  </span>
                  <span className="text-[11px] text-slate-600">Reconhecimento real</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-[#14532d]">
                    +15 Especialidades
                  </span>
                  <span className="text-xs font-semibold text-slate-700 mt-0.5">
                    Corpo Clínico Amplo
                  </span>
                  <span className="text-[11px] text-slate-600">Em um só local</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-[#14532d]">
                    Sem Espera
                  </span>
                  <span className="text-xs font-semibold text-slate-700 mt-0.5">
                    Pontualidade
                  </span>
                  <span className="text-[11px] text-slate-600">Respeito ao seu tempo</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-[#14532d]">
                    Convênios &amp; Part.
                  </span>
                  <span className="text-xs font-semibold text-slate-700 mt-0.5">
                    Acesso Facilitado
                  </span>
                  <span className="text-[11px] text-slate-600">Valores justos</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column (Photos & Official Campaign Imagery) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card Frame */}
                <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-white p-3 shadow-2xl shadow-emerald-950/10">
                  {/* Photo of the 3 Seniors (Autonomy & Healthy Aging) */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl bg-emerald-50">
                    <Image
                      src={SENIORS_SRC}
                      alt="Envelhecer bem é viver com autonomia - Pacientes saudáveis da Saúde Master"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/80 via-transparent to-transparent" />
                    
                    {/* Overlay Tagline inside image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                        Campanha Oficial Saúde Master
                      </p>
                      <p className="mt-1 font-heading text-lg font-extrabold leading-snug">
                        "Envelhecer bem é viver com autonomia."
                      </p>
                    </div>
                  </div>

                  {/* Bottom Campaign Mini Card (Replica of Flyer Bottom) */}
                  <div className="mt-3 rounded-2xl border border-emerald-100 bg-[#f0fdf4] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <span className="inline-flex items-center gap-1 rounded-md bg-[#14532d] px-2.5 py-1 text-xs font-extrabold text-white">
                          AGENDE AGORA
                        </span>
                        <p className="mt-1.5 text-xs font-bold text-slate-900 truncate">
                          Dr. Tomás de Andrade, 686 · Centro
                        </p>
                        <p className="text-[11px] text-emerald-800 font-semibold">
                          (31) 9 9619-6155 · (31) 9 9992-2456
                        </p>
                      </div>

                      <a
                        href={getWhatsAppUrl("Olá! Gostaria de agendar meu horário pelo WhatsApp.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md hover:scale-105 transition-transform"
                        aria-label="Agendar via WhatsApp"
                      >
                        <WhatsAppIcon size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating Badge: Autonomia & Longevidade */}
                <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#15803d]">
                      <Smile className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">
                        Longevidade com Vitalidade
                      </p>
                      <p className="text-[11px] text-slate-600">
                        Geriatria &amp; Saúde Integrada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. IMPACT STRIP (4 PILARES DE EXCELÊNCIA RÁPIDA) */}
      <section className="border-y border-emerald-950/10 bg-gradient-to-r from-[#052e16] via-[#14532d] to-[#166534] py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-sm font-bold text-white">
                  Atendimento Humanizado
                </h2>
                <p className="mt-1 text-xs text-emerald-100/90 leading-relaxed">
                  Médicos e equipe que ouvem sem pressa e cuidam com respeito a cada paciente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-sm font-bold text-white">
                  Mais de 15 Especialidades
                </h2>
                <p className="mt-1 text-xs text-emerald-100/90 leading-relaxed">
                  Geriatria, Clínica Geral, Cardiologia, Ortopedia, Ginecologia e muito mais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-sm font-bold text-white">
                  Respeito à Sua Agenda
                </h2>
                <p className="mt-1 text-xs text-emerald-100/90 leading-relaxed">
                  Organização rigorosa de horários para evitar esperas cansativas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-sm font-bold text-white">
                  Centro de Mateus Leme
                </h2>
                <p className="mt-1 text-xs text-emerald-100/90 leading-relaxed">
                  Rua Dr. Tomás de Andrade, 686, com fácil acesso para idosos e famílias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESPECIALIDADES MÉDICAS & EXAMES */}
      <section id="especialidades" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-green">Cuidado Integral</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Especialidades Médicas &amp; Exames
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Um corpo clínico preparado para acolher sua saúde em todas as etapas da vida, com acompanhamento integrado e diagnóstico de confiança.
            </p>
          </div>

          {/* Grid of Specialty Cards - Inicialmente 4 visíveis com botão Ver Mais */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(showAllSpecialties ? especialidades : especialidades.slice(0, 4)).map((esp) => {
              const IconComp = esp.icon;
              return (
                <motion.div
                  key={esp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-950/5"
                >
                  <div>
                    {/* Top Tag & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${esp.tagColor || "text-[#15803d]"}`}>
                        {esp.tag}
                      </span>
                      {esp.badge && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-extrabold text-[#14532d]">
                          {esp.badge}
                        </span>
                      )}
                    </div>

                    {/* Title with Thematic Colored Icon */}
                    <div className="mt-3 flex items-center gap-2.5">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all ${esp.iconStyle || "bg-emerald-50 text-emerald-600 border-emerald-200"}`}>
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-sm font-bold text-slate-900 leading-snug">
                        {esp.name}
                      </h3>
                    </div>

                    {/* Short Punchy Description */}
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {esp.desc}
                    </p>

                    {/* Minimal Pills */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {esp.pills.map((pill, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-slate-50 border border-slate-200/60 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <a
                      href={getWhatsAppUrl(esp.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-between text-xs font-bold text-[#14532d] hover:text-[#16a34a] transition-colors"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <WhatsAppIcon size={14} className="text-[#16a34a]" />
                        <span>Agendar Horário</span>
                      </span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Botão Ver Mais / Ver Menos Especialidades */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllSpecialties(!showAllSpecialties)}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50/80 px-6 py-3 text-xs font-bold text-[#14532d] shadow-xs hover:bg-[#14532d] hover:text-white transition-all cursor-pointer"
            >
              <span>
                {showAllSpecialties
                  ? "Ver menos especialidades"
                  : `Ver mais especialidades (+${especialidades.length - 4})`}
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  showAllSpecialties ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Bottom Specialty Callout */}
          <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-r from-[#f0fdf4] via-emerald-50 to-[#f0fdf4] p-6 sm:p-8 text-center">
            <h3 className="font-heading text-xl font-extrabold text-slate-900 sm:text-2xl">
              Não encontrou a especialidade ou exame que você procura?
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-600">
              Nossa equipe médica conta com diversos profissionais em constante rotação. Entre em contato com a recepção pelo WhatsApp para checar disponibilidade de datas e horários.
            </p>
            <div className="mt-5">
              <GlowingButton
                href={getWhatsAppUrl("Olá! Gostaria de consultar a disponibilidade de uma especialidade / médico no Saúde Master Centro Médico.")}
                target="_blank"
                size="md"
                variant="green"
              >
                <WhatsAppIcon size={18} />
                <span>Consultar Especialidades no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO ESPECIAL: LONGEVIDADE COM AUTONOMIA */}
      <section
        id="autonomia"
        className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] to-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Visual Column: Flyer Presentation */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-3xl border-2 border-emerald-200 bg-white p-2.5 shadow-2xl shadow-emerald-950/10">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-emerald-50">
                  <Image
                    src={FLYER_SRC}
                    alt="Campanha Saúde Master - Envelhecer bem é viver com autonomia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-bold text-slate-900">
                    Campanha de Conscientização &amp; Saúde
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Saúde Master Centro de Especialidades Médicas
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7">
              <span className="eyebrow-green">Filosofia de Cuidado</span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                O que significa envelhecer com autonomia?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Significa chegar aos 60, 70 ou 80 anos mantendo o poder de tomar as próprias decisões, fazer compras, passear com os netos, cozinhar a comida favorita e acordar com energia e disposição.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                O processo natural de envelhecimento não precisa ser sinônimo de perdas. Com o acompanhamento médico adequado, é perfeitamente possível proteger a mobilidade, manter a mente afiada e prevenir doenças antes que elas limitem a sua rotina.
              </p>

              {/* 4 Pilares da Autonomia */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#14532d] font-bold text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#16a34a]" />
                    <span>Revisão Farmacológica Segura</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Ajuste de doses e eliminação de remédios desnecessários para evitar tonturas, quedas e interações perigosas.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#14532d] font-bold text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#16a34a]" />
                    <span>Saúde Muscular &amp; Articular</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Acompanhamento ortopédico para manter ossos fortes, postura firme e caminhar com segurança.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#14532d] font-bold text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#16a34a]" />
                    <span>Vitalidade Cognitiva &amp; Memória</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Estímulo neurológico e emocional para manter raciocínio rápido, memória preservada e bom humor.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#14532d] font-bold text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#16a34a]" />
                    <span>Acolhimento da Família</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Orientações claras para filhos e cuidadores saberem exatamente como apoiar sem retirar a independência.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta focada na saúde do idoso / longevidade com autonomia.")}
                  target="_blank"
                  size="md"
                  variant="green"
                >
                  <WhatsAppIcon size={18} />
                  <span>Agendar Consulta de Longevidade</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOBRE A CLÍNICA & ESTRUTURA */}
      <section id="sobre" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <span className="eyebrow-green">Nossa História &amp; Estrutura</span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Saúde Master Centro Médico: Referência em Cuidado no Centro de Mateus Leme
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                O <strong>Saúde Master Centro Médico</strong> nasceu com a missão de aproximar os melhores especialistas da população de Mateus Leme e região metropolitana, evitando que os pacientes precisem se deslocar para capitais em busca de atendimento de confiança.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Localizada estrategicamente na <strong>Rua Dr. Tomás de Andrade, 686</strong>, nossa clínica conta com consultórios modernos, recepção climatizada, equipe de enfermagem qualificada e rigorosos protocolos de assepsia e conforto.
              </p>

              {/* 3 Pillars */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-[#15803d]">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Acessibilidade Completa para Idosos e Cadeirantes
                    </h3>
                    <p className="text-xs text-slate-600">
                      Entrada plana, portas largas, banheiros adaptados e equipe sempre pronta para oferecer apoio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-[#15803d]">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Ambiente Limpo, Seguro e Climatizado
                    </h3>
                    <p className="text-xs text-slate-600">
                      Salas higienizadas com frequência, poltronas confortáveis e tranquilidade para sua espera.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-[#15803d]">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Atendimento Particular e Diversos Convênios
                    </h3>
                    <p className="text-xs text-slate-600">
                      Flexibilidade nas formas de pagamento com cartão, PIX e cobertura para planos de saúde parceiros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images Column */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src={RECEPCAO_SRC}
                    alt="Recepção moderna e acolhedora da Saúde Master Centro Médico"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-800 backdrop-blur-xs">
                    Recepção Climatizada
                  </div>
                </div>

                <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                  <Image
                    src={INTERIOR_SRC}
                    alt="Consultórios equipados da Saúde Master"
                    fill
                    sizes="(max-width: 1024px) 50vw, 240px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-800 backdrop-blur-xs">
                    Consultórios
                  </div>
                </div>

                <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                  <Image
                    src={FACHADA_SRC}
                    alt="Estrutura e localização da Saúde Master Centro Médico"
                    fill
                    sizes="(max-width: 1024px) 50vw, 240px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-800 backdrop-blur-xs">
                    Acessibilidade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIFERENCIAIS ESTRATÉGICOS (6 CARDS) */}
      <section id="diferenciais" className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-green">Por Que Escolher a Saúde Master</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Diferenciais que Transformam a Sua Experiência
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Compromisso sério com o seu bem-estar, respeito à sua dignidade e facilidade de agendamento em Mateus Leme.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((dif, idx) => {
              const IconComp = dif.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#15803d] border border-emerald-100">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-slate-900">
                    {dif.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {dif.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL & DEPOIMENTOS DE PACIENTES */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-800">
              <GoogleIcon size={14} />
              <span>Avaliação 4,9 ★★★★★ no Google Maps</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              O Que Nossos Pacientes Dizem
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Histórias reais de quem confia a própria saúde e a de sua família ao Saúde Master Centro Médico.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map((dep, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-200 hover:shadow-md transition-all"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(dep.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-slate-500">
                      {dep.date}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-700 italic">
                    "{dep.text}"
                  </p>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-xs font-bold text-slate-900">{dep.name}</p>
                  <p className="text-[11px] text-[#15803d] font-semibold">{dep.detail}</p>
                  <p className="text-[10px] text-slate-600">{dep.city}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google CTA */}
          <div className="mt-10 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#15803d] transition-colors"
            >
              <GoogleIcon size={16} />
              <span>Ver todas as avaliações no Google Meu Negócio</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 10. INTERMEDIATE CONVERSION BANNER (REPLICA DO FLYER: "AGENDE AGORA") */}
      <section className="bg-gradient-to-r from-[#052e16] via-[#14532d] to-[#166534] py-12 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-400/30 bg-white/10 p-6 sm:p-10 backdrop-blur-md">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-extrabold text-emerald-300">
                  <Smile className="h-4 w-4" />
                  <span>Envelhecer bem é viver com autonomia.</span>
                </span>
                <h2 className="mt-4 font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl text-white">
                  Pronto para cuidar da sua saúde com quem realmente se importa?
                </h2>
                <p className="mt-3 text-sm text-emerald-100 sm:text-base leading-relaxed">
                  Agende sua consulta com facilidade pelo WhatsApp. Nossa equipe de recepção está disponível para te atender com prontidão, atenção e carinho.
                </p>

                {/* Contact Pills */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-emerald-100 font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-300" />
                    <span>Dr. Tomás de Andrade, 686 - Centro, Mateus Leme</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-300" />
                    <span>(31) 9 9619-6155 · (31) 9 9992-2456</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Vi a campanha no site e gostaria de agendar uma consulta no Saúde Master Centro Médico.")}
                  target="_blank"
                  size="lg"
                  variant="whatsapp"
                  className="w-full text-center"
                >
                  <WhatsAppIcon size={20} />
                  <span>AGENDE AGORA (WhatsApp)</span>
                </GlowingButton>

                <GlowingButton
                  href="tel:3135352459"
                  size="md"
                  variant="outline-white"
                  className="w-full text-center"
                >
                  <Phone size={16} />
                  <span>Ligar no Fixo: {PHONE_FIXO_DISPLAY}</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ / PERGUNTAS FREQUENTES */}
      <section id="faq" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="eyebrow-green">Tire Suas Dúvidas</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Respostas claras para as principais perguntas sobre consultas, especialidades e agendamentos.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-sm sm:text-base font-bold text-slate-900 hover:text-[#15803d]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#15803d]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Ainda com alguma dúvida específica?{" "}
            <a
              href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre o Saúde Master Centro Médico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#15803d] hover:underline"
            >
              Fale diretamente com nossa recepção no WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 12. LOCALIZAÇÃO & CONTATO */}
      <section id="contato" className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Contact Details Column */}
            <div className="lg:col-span-6">
              <span className="eyebrow-green">Fácil Acesso</span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Como Chegar ao Saúde Master Centro Médico
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Estamos no coração de Mateus Leme, com facilidade para estacionamento rápido, desembarque de idosos e proximidade aos principais pontos da cidade.
              </p>

              {/* Info Cards */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#15803d]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Endereço Completo
                    </h3>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      {ADDRESS_TEXT}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ponto central e de fácil localização em Mateus Leme - MG
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#15803d]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Horário de Funcionamento
                    </h3>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      Segunda a Sexta: 07h30 às 18h00
                    </p>
                    <p className="text-xs text-slate-600">
                      Sábado: 08h00 às 12h00 (mediante agendamento)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#15803d]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Canais de Atendimento
                    </h3>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      WhatsApp: {PHONE_DISPLAY} · {PHONE_SEC_DISPLAY}
                    </p>
                    <p className="text-xs text-slate-600">
                      Telefone Fixo: {PHONE_FIXO_DISPLAY}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
                >
                  <MapPin size={14} />
                  <span>Abrir no Google Maps</span>
                </a>

                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent(ADDRESS_TEXT)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span>Navegar pelo Waze</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Visual Column: Clinic Map & Facade */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={FACHADA_SRC}
                    alt="Saúde Master Centro Médico em Mateus Leme"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Saúde Master Centro Médico
                    </p>
                    <p className="font-heading text-base font-extrabold">
                      Rua Dr. Tomás de Andrade, 686 · Centro
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 p-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                    <span>Estacionamento e fácil embarque de pacientes</span>
                  </div>

                  <a
                    href={getWhatsAppUrl("Olá! Gostaria de confirmar o endereço para ir à clínica.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#15803d] hover:underline"
                  >
                    Confirmar Trajeto &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FOOTER INSTITUCIONAL COMPLETO */}
      <footer className="border-t border-slate-200 bg-[#052e16] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="relative h-12 w-48 brightness-0 invert">
                <Image
                  src={LOGO_SRC}
                  alt="Saúde Master Centro Médico"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                />
              </div>

              <p className="mt-4 text-xs leading-relaxed text-emerald-100/90">
                O <strong>Saúde Master Centro Médico</strong> é o centro multidisciplinar de referência em Mateus Leme - MG. Cuidado humanizado, longevidade ativa e dedicação plena à sua saúde e da sua família.
              </p>

              <p className="mt-3 text-xs italic text-emerald-300 font-medium">
                "Envelhecer bem é viver com autonomia."
              </p>

              {/* Social Media Links */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white hover:text-[#052e16] transition-colors"
                  aria-label="Instagram do Saúde Master"
                >
                  <InstagramIcon size={18} />
                </a>

                <a
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe do Saúde Master.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#25D366] hover:text-white transition-colors"
                  aria-label="WhatsApp do Saúde Master"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>

            {/* Specialties Links Column */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Especialidades Atendidas
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-emerald-100/80">
                <li>• Geriatria &amp; Longevidade</li>
                <li>• Clínica Médica Geral</li>
                <li>• Cardiologia &amp; ECG</li>
                <li>• Ortopedia &amp; Traumatologia</li>
                <li>• Ginecologia &amp; Obstetrícia</li>
                <li>• Pediatria</li>
                <li>• Oftalmologia</li>
                <li>• Dermatologia</li>
                <li>• Neurologia</li>
                <li>• Psiquiatria &amp; Psicologia</li>
                <li>• Endocrinologia</li>
                <li>• Urologia</li>
              </ul>
            </div>

            {/* Contact & Hours Column */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Atendimento &amp; Endereço
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-emerald-100/90">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Dr. Tomás de Andrade, 686 - Centro, Mateus Leme - MG</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Seg a Sex: 07h30 às 18h | Sáb: 08h às 12h</span>
                </li>
                <li className="flex items-center gap-2">
                  <WhatsAppIcon size={16} className="text-emerald-300 shrink-0" />
                  <span>WhatsApp: (31) 9 9619-6155 · (31) 9 9992-2456</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Telefone Fixo: (31) 3535-2459</span>
                </li>
              </ul>

              <div className="mt-5">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar pelo site.")}
                  target="_blank"
                  size="sm"
                  variant="whatsapp"
                  className="w-full text-center"
                >
                  <WhatsAppIcon size={14} />
                  <span>Falar com Atendimento</span>
                </GlowingButton>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-emerald-900/60 pt-6 text-center text-[11px] text-emerald-200/80">
            <p>
              © {new Date().getFullYear()} Saúde Master Centro Médico — Todos os direitos reservados.
            </p>
            <p className="mt-1">
              Rua Dr. Tomás de Andrade, 686 · Centro · Mateus Leme / MG · CEP 35670-000.
            </p>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING WHATSAPP BUTTON (CONVERSÃO EM QUALQUER PONTO DA PÁGINA) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={getWhatsAppUrl("Olá! Estou no site da Saúde Master e gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1eb858] via-[#25D366] to-[#128C7E] px-4 py-3 text-white font-extrabold shadow-xl hover:scale-105 transition-all pulse-whatsapp"
          aria-label="Abrir conversa no WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline text-xs tracking-wide">
            Agendar Consulta
          </span>
        </a>
      </div>
    </div>
  );
}
