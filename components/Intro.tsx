import React, { useEffect, useState } from 'react';

const Intro: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // show logo animation then fade
    const fadeTimer = setTimeout(() => setFading(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro-overlay ${fading ? 'intro-fade' : ''}`} onClick={() => { setFading(true); setTimeout(() => setVisible(false), 300); }}>
      <div className="intro-inner">
        <img src="/assets/ctex-logo.png" alt="CTECX" className={`intro-logo ${fading ? 'intro-logo-out' : 'intro-logo-in'}`} />
        <div className="intro-title">CTECX</div>
      </div>
    </div>
  );
};

export default Intro;
