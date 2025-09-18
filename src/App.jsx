import './App.css'
import { 
  Users, 
  MapPin, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Trophy, 
  Calculator,
  Shield,
  Smartphone,
  Car,
  GraduationCap,
  Plane,
  UserPlus,
  Heart,
  Star,
  Mail,
  Phone,
  Building,
  User,
  Briefcase,
  Settings,
  Target,
  MessageCircle,
  Lightbulb,
  CheckCircle2,
  Upload
} from 'lucide-react'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">Almacenes Sivar</div>
            <a href="#aplicar" className="nav-link">
              <Users size={20} />
              ¡Únete a nuestro equipo!
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Users size={16} />
              ¡Únete a nuestro equipo!
            </div>
            <h1>
              Ejecutivo de<br />
              Ventas en<br />
              Almacenes Sivar
            </h1>
            <p>
              Impulsa tu carrera profesional con nosotros.
              Ofrecemos salario competitivo, comisiones atractivas
              y oportunidades reales de crecimiento en una
              empresa líder.
            </p>
            <div className="hero-cta">
              <a href="#aplicar" className="btn btn-primary">Aplicar Ahora</a>
              <a href="#beneficios" className="btn btn-secondary">Ver Beneficios</a>
              <a href="#requisitos" className="btn btn-secondary">Ver Requisitos</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <MapPin className="stat-icon" />
                <span>El Salvador</span>
              </div>
              <div className="stat-item">
                <Clock className="stat-icon" />
                <span>Tiempo Completo</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/team-sales.jpg" 
              alt="Equipo de ventas de Almacenes Sivar" 
              className="hero-image-photo"
            />
            <div className="salary-highlight">
              <span className="salary-amount">$875</span>
              <span className="salary-label">Salario bruto esperado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section className="section compensation" id="compensacion">
        <div className="container">
          <h2 className="section-title">Compensación Competitiva</h2>
          <p className="section-subtitle">
            Ofrecemos un paquete salarial atractivo con múltiples fuentes de ingresos para
            recompensar tu desempeño.
          </p>
          <div className="compensation-grid">
            <div className="compensation-card">
              <DollarSign className="compensation-icon" size={48} />
              <h3 className="compensation-title">Salario Base</h3>
              <div className="compensation-amount">$500</div>
              <p className="compensation-description">USD mensuales garantizados</p>
            </div>
            <div className="compensation-card">
              <TrendingUp className="compensation-icon" size={48} />
              <h3 className="compensation-title">Comisiones</h3>
              <div className="compensation-amount">3%</div>
              <p className="compensation-description">Sobre ventas netas + 2% bono</p>
            </div>
            <div className="compensation-card">
              <Trophy className="compensation-icon" size={48} />
              <h3 className="compensation-title">OTE Estimado</h3>
              <div className="compensation-amount">$875</div>
              <p className="compensation-description">USD mensuales al cumplir metas</p>
            </div>
            <div className="compensation-card">
              <Calculator className="compensation-icon" size={48} />
              <h3 className="compensation-title">Salario Neto</h3>
              <div className="compensation-amount">$744</div>
              <p className="compensation-description">USD después de deducciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits" id="beneficios">
        <div className="container">
          <h2 className="section-title">Beneficios Excepcionales</h2>
          <p className="section-subtitle">
            Más que un salario competitivo, ofrecemos un paquete integral de beneficios
            diseñado para tu crecimiento personal y profesional.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Shield className="benefit-icon" size={40} />
              <h3 className="benefit-title">Seguro Médico</h3>
              <p className="benefit-description">
                Cobertura hasta $1,000 por daños y $10,000 en caso de defunción
              </p>
            </div>
            <div className="benefit-card">
              <GraduationCap className="benefit-icon" size={40} />
              <h3 className="benefit-title">Educación Continua</h3>
              <p className="benefit-description">
                Hasta $500 anuales para cursos y certificaciones
              </p>
            </div>
            <div className="benefit-card">
              <Plane className="benefit-icon" size={40} />
              <h3 className="benefit-title">Viajes Anuales</h3>
              <p className="benefit-description">
                Viaje de fin de semana pagado por superar metas 6+ veces
              </p>
            </div>
            <div className="benefit-card">
              <UserPlus className="benefit-icon" size={40} />
              <h3 className="benefit-title">Bono por Referidos</h3>
              <p className="benefit-description">
                $300 USD por candidato referido que permanezca 3+ meses
              </p>
            </div>
            <div className="benefit-card">
              <Clock className="benefit-icon" size={40} />
              <h3 className="benefit-title">Horarios Flexibles</h3>
              <p className="benefit-description">
                Ideal para quienes continúan formándose profesionalmente
              </p>
            </div>
            <div className="benefit-card">
              <Heart className="benefit-icon" size={40} />
              <h3 className="benefit-title">Ambiente Laboral</h3>
              <p className="benefit-description">
                Entorno seguro, saludable y que promueve el bienestar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section requirements" id="requisitos">
        <div className="container">
          <h2 className="section-title">¿Eres el Candidato Ideal?</h2>
          <p className="section-subtitle">
            Buscamos profesionales proactivos y orientados a resultados que quieran crecer
            con nosotros.
          </p>
          <div className="requirements-content">
            <div className="requirements-column">
              <div className="requirement-section">
                <h3>
                  <User size={24} />
                  Formación Académica
                </h3>
                <div className="requirement-item">
                  <CheckCircle2 size={20} className="requirement-check" />
                  <div className="requirement-details">
                    <strong>Bachillerato concluido</strong>
                    <p>Preferible estudios en Mercadeo, Administración o carreras afines</p>
                  </div>
                </div>
              </div>

              <div className="requirement-section">
                <h3>
                  <Briefcase size={24} />
                  Experiencia Laboral
                </h3>
                <div className="requirement-item">
                  <CheckCircle2 size={20} className="requirement-check" />
                  <div className="requirement-details">
                    <strong>1-2 años en ventas o servicio al cliente</strong>
                    <p>Experiencia comprobable en atención al cliente y procesos de venta</p>
                  </div>
                </div>
              </div>

              <div className="requirement-section">
                <h3>
                  <Settings size={24} />
                  Conocimientos Técnicos
                </h3>
                <div className="requirement-list">
                  <div className="requirement-item">
                    <CheckCircle2 size={18} className="requirement-check" />
                    <span>Técnicas de ventas y negociación</span>
                  </div>
                  <div className="requirement-item">
                    <CheckCircle2 size={18} className="requirement-check" />
                    <span>Manejo básico de Excel, CRM y redes sociales</span>
                  </div>
                  <div className="requirement-item">
                    <CheckCircle2 size={18} className="requirement-check" />
                    <span>Conocimiento de productos (se proporciona capacitación)</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="requirements-column">
              <div className="requirement-section">
                <h3>
                  <Target size={24} />
                  Habilidades Clave
                </h3>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>
                      <MessageCircle size={18} />
                      Habilidades Interpersonales
                    </h4>
                    <ul className="skill-list">
                      <li>Comunicación efectiva</li>
                      <li>Orientación al cliente</li>
                      <li>Persuasión</li>
                      <li>Análisis de necesidades</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>
                      <Lightbulb size={18} />
                      Competencias Personales
                    </h4>
                    <ul className="skill-list">
                      <li>Proactividad</li>
                      <li>Responsabilidad</li>
                      <li>Adaptabilidad</li>
                      <li>Ética profesional</li>
                    </ul>
                  </div>
                </div>
                
                <div className="organization-section">
                  <h4>
                    <Clock size={18} />
                    Organización
                  </h4>
                  <div className="organization-list">
                    <div className="requirement-item">
                      <CheckCircle2 size={16} className="requirement-check" />
                      <span>Gestión eficiente del tiempo</span>
                    </div>
                    <div className="requirement-item">
                      <CheckCircle2 size={16} className="requirement-check" />
                      <span>Capacidad de trabajar bajo presión</span>
                    </div>
                    <div className="requirement-item">
                      <CheckCircle2 size={16} className="requirement-check" />
                      <span>Orientación a resultados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Lo que dicen Nuestros Colaboradores</h2>
          <p className="section-subtitle">
            Conoce las experiencias reales de quienes ya forman parte del equipo de
            Almacenes Sivar.
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <Star key={i} className="star" size={20} fill="#ffc107" color="#ffc107" />)}
              </div>
              <p className="testimonial-content">
                "Almacenes Sivar me ha dado la oportunidad de crecer profesionalmente.
                Comencé como ejecutiva junior y ahora lidero mi propio equipo."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <h4>Melanie Cruz</h4>
                  <p>Ejecutiva de Ventas Senior - 2 años en la empresa</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <Star key={i} className="star" size={20} fill="#ffc107" color="#ffc107" />)}
              </div>
              <p className="testimonial-content">
                "Lo que más me gusta es la transparencia en las comisiones y el apoyo constante
                para alcanzar las metas. El año pasado gané el viaje anual."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <h4>Carles Rivera</h4>
                  <p>Encargado de bodega - 5 años en la empresa</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <Star key={i} className="star" size={20} fill="#ffc107" color="#ffc107" />)}
              </div>
              <p className="testimonial-content">
                "Empecé como ejecutiva y ahora soy supervisora. La empresa realmente invierte
                en el desarrollo de su personal."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <h4>Sarahi Hernandez</h4>
                  <p>Supervisora de Ventas - 4 años en la empresa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="aplicar">
        <div className="container">
          <h2 className="section-title">¡Comienza tu Nueva Carrera Hoy!</h2>
          <p className="section-subtitle">
            Únete a nuestro equipo y descubre todas las oportunidades que tenemos para ti.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <div className="contact-item">
                <Mail className="contact-icon" size={24} />
                <div>
                  <strong>Email de Reclutamiento</strong><br />
                  reclutamiento@almacenessivar.com
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={24} />
                <div>
                  <strong>Teléfono</strong><br />
                  (503) 7723-2086
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <strong>Ubicación</strong><br />
                  El Salvador - Múltiples sucursales
                </div>
              </div>
              <div className="contact-item">
                <Clock className="contact-icon" size={24} />
      <div>
                  <strong>Horario de Atención</strong><br />
                  Lunes a Viernes: 8:00 AM - 5:00 PM
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3 className="form-title">Formulario de Contacto Rápido</h3>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" placeholder="Tu número de teléfono" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="tu.email@ejemplo.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="experiencia">Años de Experiencia en Ventas</label>
                  <input type="text" id="experiencia" name="experiencia" placeholder="Ej: 2 años" required />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">¿Por qué te interesa trabajar con nosotros?</label>
                  <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos brevemente por qué quieres formar parte de Almacenes Sivar..." required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="cv">Subir CV (PDF, DOC, DOCX - Máx. 5MB)</label>
                  <div className="file-upload-container">
                    <input 
                      type="file" 
                      id="cv" 
                      name="cv" 
                      accept=".pdf,.doc,.docx" 
                      className="file-input"
                      required 
                    />
                    <label htmlFor="cv" className="file-upload-label">
                      <Upload className="file-upload-icon" size={24} />
                      <span className="file-upload-text">Seleccionar archivo CV</span>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Enviar Solicitud →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Almacenes Sivar</h3>
              <p>
                Líder en el sector de almacenes en El Salvador, comprometidos con el crecimiento
                profesional de nuestro equipo.
        </p>
      </div>
            <div className="footer-section">
              <h3>Oportunidades</h3>
              <ul>
                <li>Ejecutivo de Ventas</li>
                <li>Supervisor de Ventas</li>
                <li>Gerente de Sucursal</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Beneficios Destacados</h3>
              <ul>
                <li>Salario competitivo + comisiones</li>
                <li>Seguro médico complementario</li>
                <li>Oportunidades de crecimiento</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Almacenes Sivar. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
