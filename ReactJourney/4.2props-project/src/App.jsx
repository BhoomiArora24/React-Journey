import Card from './components/Card'


function App() {

  const services = [
    {
      id: 1,
      profession: "Web Design",
      info: "Creating beautiful, responsive websites.",
      cardBg: "bg-pink-100",
      tag1: "Landing Page",
      tag2: "Website",
      tag3: "UI Design",
      tagBg: "bg-pink-200",
    },
    {
      id: 2,
      profession: "Content Writing",
      info: "Writing engaging, SEO-friendly content.",
      cardBg: "bg-blue-100",
      tag1: "Blog",
      tag2: "SEO",
      tag3: "Copywriting",
      tagBg: "bg-blue-200",
    },
    {
      id: 3,
      profession: "Graphic Design",
      info: "Designing creative visuals and branding.",
      cardBg: "bg-purple-100",
      tag1: "Logo",
      tag2: "Poster",
      tag3: "Branding",
      tagBg: "bg-purple-200",
    },
    {
      id: 4,
      profession: "Digital Marketing",
      info: "Growing brands through online marketing.",
      cardBg: "bg-green-100",
      tag1: "Social Media",
      tag2: "Ads",
      tag3: "Analytics",
      tagBg: "bg-green-200",
    },
    {
      id: 5,
      profession: "App Development",
      info: "Building modern Android and iOS apps.",
      cardBg: "bg-yellow-100",
      tag1: "Android",
      tag2: "iOS",
      tag3: "Flutter",
      tagBg: "bg-yellow-200",
    },
    {
      id: 6,
      profession: "UI/UX Design",
      info: "Crafting intuitive user experiences daily.",
      cardBg: "bg-orange-100",
      tag1: "Wireframe",
      tag2: "Prototype",
      tag3: "Research",
      tagBg: "bg-orange-200",
    },
  ];

  return (
    <>
      <div className="bg-[#E5FFFC] p-10 flex flex-wrap gap-5">
        {services.map(function(val){
          return(
          <Card 
          prof={val.profession} 
          info={val.info}
          tag1={val.tag1}
          tag2={val.tag2}
          tag3={val.tag3}
          cardBg={val.cardBg}
          tagBg={val.tagBg}
          />)
        })}
      </div>
    </>
  )
}

export default App
