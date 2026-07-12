import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://i.pinimg.com/736x/e2/17/60/e217608cda9cbf73e3386f6260219e4e.jpg",
      intro: "Tech-savvy individuals looking for convenient digital banking, instant payments, salary accounts, and smart tools.",
      color: "#22C55E",
      tag: "Active Users"
    },
    {
      img: "https://i.pinimg.com/1200x/60/fd/90/60fd901d93ff985aae17209c4318003f.jpg",
      intro: "who need business accounts, quick loans, expense mang, and secure paynt solutions to grow their businesses.",
      color: "#3B82F6",
      tag: "Clients"
    },
    {
      img: "https://i.pinimg.com/1200x/d1/77/12/d177124a41b3552c2667684faff1ee77.jpg",
      intro: "High-value customers seeking wealth mang, investment oppor, exclusive rewards, and dedicated rele managers.",
      color: "#A855F7",
      tag: "Banking"
    },
    {
      img: "https://i.pinimg.com/736x/ae/68/19/ae6819ddbf69157555d0a985c7f30b1e.jpg",
      intro: "Our AI-powered customer segm helps financial institutions identify the right audience and deliver personalized.",
      color: "#F59E0B",
      tag: "Growth Seg"
    }
  ];

  return (
    <div>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </div>
  )
}

export default App