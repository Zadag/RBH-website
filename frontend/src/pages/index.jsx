import React from 'react';
import Layout from '../layouts/Layout';
import Card from '../components/Card';
import RBHImage from '../assets/RBH-testlogo-raw copy.jpeg';
import CaptainCard from '../components/CaptainCard';

const IndexPage = () => {
  return (
    <Layout title="Welcome to RBH">
      <main>
        <h1><span className="text-gradient">RBH Tournament Draft</span></h1>

        <section id="captain-sect">
          <CaptainCard name='Sasha' url='/captains/captain-1' />
          <CaptainCard name='LostZero' url='/captains/captain-2' />
          <CaptainCard name='ChillSavior' url='/captains/captain-3' />
          <CaptainCard name='HumanFaith' url='/captains/captain-4' />
          <CaptainCard name='Frischy' url='/captains/captain-5' />
          <CaptainCard name='SComm' url='/captains/captain-6' />
          <CaptainCard name="All players" url='/captains/all' />
        </section>
        <section id="player-sect">

        </section>
      </main>

      <style jsx>{`
        main {
          margin: auto;
          padding: 1rem;
          width: 1200px;
          max-width: calc(100% - 2rem);
          color: white;
          font-size: 20px;
          line-height: 1.6;
        }
        .astro-a {
          position: absolute;
          top: -32px;
          left: 50%;
          transform: translatex(-50%);
          width: 220px;
          height: auto;
          z-index: -1;
        }
        h1 {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1;
          text-align: center;
        }
        .text-gradient {
          background-image: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400%;
          background-position: 0%;
        }
        .instructions {
          margin-bottom: 2rem;
          border: 1px solid rgba(var(--accent-light), 25%);
          background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
          padding: 1.5rem;
          border-radius: 8px;
        }
        .instructions code {
          font-size: 0.8em;
          font-weight: bold;
          background: rgba(var(--accent-light), 12%);
          color: rgb(var(--accent-light));
          border-radius: 4px;
          padding: 0.3em 0.4em;
        }
        .instructions strong {
          color: rgb(var(--accent-light));
        }
        .link-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
          gap: 2rem;
          padding: 0;
        }
        #bg-video-container {
          display: flex;
          justify-content: center;
          /* margin-top: 1rem; */
        }
        #bg-video {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          margin: auto;
          z-index: -1;
          object-fit: cover;
        }
        #RBHlogo {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          margin: auto;
          height: 6rem;
        }
        #disc-invite {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(var(--accent-dark), 0.763);
          max-width: 500px;
          height: 100px;
          margin: auto;
          box-shadow: inset 12px;
        }
        #captain-sect {
          display: flex;
        }
        #player-sect {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;