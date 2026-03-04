import React, { useState } from 'react'
import './MyWork.css'
import project1 from '../../assets/project_image_1.svg'
import project2 from '../../assets/project_image_2.svg'
import project3 from '../../assets/project_image_3.svg'
import project4 from '../../assets/project_image_4.svg'
import project5 from '../../assets/project_image_5.svg'
import project6 from '../../assets/project_image_6.svg'

const projects = [
  { id: 1, title: 'Project One', category: 'Web App', img: project1, year: '2024', desc: 'A fullstack web application built with React and Node.js.' },
  { id: 2, title: 'Project Two', category: 'UI Design', img: project2, year: '2024', desc: 'Clean UI design with a focus on user experience and accessibility.' },
  { id: 3, title: 'Project Three', category: 'Web App', img: project3, year: '2023', desc: 'Dynamic web application with real-time features and API integration.' },
  { id: 4, title: 'Project Four', category: 'Frontend', img: project4, year: '2024', desc: 'Responsive frontend built with modern React patterns and animations.' },
  { id: 5, title: 'Project Five', category: 'Frontend', img: project5, year: '2023', desc: 'Pixel-perfect implementation from a Figma design file.' },
  { id: 6, title: 'Project Six', category: 'UI Design', img: project6, year: '2024', desc: 'UI/UX design project focused on information architecture.' },
]

const filters = ['All', 'Web App', 'Frontend', 'UI Design']

const MyWork = () => {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="work" className="mywork">
      <div className="mywork-inner">
        <div className="section-label">
          <span>03</span>
          <div className="label-line"></div>
          <span>My Work</span>
        </div>

        <div className="mywork-header">
          <h2 className="mywork-heading">Selected<br /><span className="heading-accent">Projects</span></h2>
          <div className="work-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn font-mono ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="work-grid">
          {filtered.map((p, i) => (
            <div className={`work-card ${i === 0 ? 'featured' : ''}`} key={p.id}>
              <div className="work-img-wrap">
                <img src={p.img} alt={p.title} />
                <div className="work-overlay">
                  <span className="overlay-cta font-mono">View Project →</span>
                </div>
              </div>
              <div className="work-info">
                <div className="work-meta font-mono">
                  <span className="work-cat">{p.category}</span>
                  <span className="work-year">{p.year}</span>
                </div>
                <h3 className="work-title">{p.title}</h3>
                <p className="work-desc font-mono">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="work-note font-mono">
          💡 Replace these with your real projects and add links!
        </div>
      </div>
    </section>
  )
}

export default MyWork
