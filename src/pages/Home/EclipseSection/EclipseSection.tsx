import React, { useEffect, useRef } from 'react';
import './EclipseSection.css';

const EclipseSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    let particleCount = calculateParticleCount(canvas);

    class Particle {
      x!: number;
      y: number;
      speed!: number;
      opacity!: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
      canvas: HTMLCanvasElement;

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.reset();
        this.y = Math.random() * this.canvas.height;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.speed = Math.random() / 5 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.reset();
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
          this.fadingOut = true;
        }

        if (this.fadingOut) {
          this.opacity -= 0.008;
          if (this.opacity <= 0) {
            this.reset();
          }
        }
      }

      draw() {
        if (!ctx) return; // Ensure ctx is available
        ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${
          this.opacity
        })`;
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
      }
    }

    function initParticles(canvas: HTMLCanvasElement) {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
      }
    }

    function animate() {
      if (!ctx || !canvas) return; // Ensure ctx and canvas are available
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    function calculateParticleCount(canvas: HTMLCanvasElement) {
      return Math.floor((canvas.width * canvas.height) / 6000);
    }

    function onResize() {
      if (!canvas) return; // Ensure canvas is available
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = calculateParticleCount(canvas);
      initParticles(canvas); // Ensure canvas is passed to initParticles
    }

    window.addEventListener('resize', onResize);

    initParticles(canvas);
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="ecl">
      <div className="header_ecl">
        <div className="spotlight">
          <div />
          <div />
          <div />
        </div>
      </div>
      <canvas ref={canvasRef} id="particleCanvas" />
      <div className="accent-lines">
        <div>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="heroSubP">
        <p>Introducing</p>
      </div>
      <div className="hero">
        <div className="heroT">
          <h2>Eclipx</h2>
          <h2>Eclipx</h2>
        </div>
      </div>
      <p className="heroP">
        The world's best platform, <br />
        powered by EclipxOS + React.
      </p>
      <div className="mountains">
        <div />
        <div />
        <div />
      </div>
      <div className="hero-spacer" />
      <div className="content-section">
        <div className="content-acc">
          <div />
          <div />
        </div>
        <p className="subt">Revolutionary by design</p>
        <h3 className="title">
          Harness. Empower.
          <br />
          Unmatched Versatility.
        </h3>
        <p className="subp">
          At the core lies our revolutionary framework, <br />
          ensuring adaptability across all application architectures.
        </p>
      </div>
    </section>
  );
};

export default EclipseSection;
