const Jumbotron = () => {
  const title = 'Growth Through Tailored'
  const subTitle = 'We are a team expert IT Consultants dedicated to providing exceptional technology solution to businesses.'
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-10">
      <div>
        <h2 className="text-7xl text-primary font-bold">
          { title }
          <img src="/it_solution.png" className="w-3/6 inline" />
        </h2>

        <p className="mt-10 text-[#2E3E5C]">{ subTitle }</p>
        <button className="mt-5 py-3 px-10 border hover:border-positive hover:bg-[#fff] hover:text-positive bg-positive text-[#fff] rounded">Contact Us</button>
      </div>

      <div className="flex -mt-24 ml-auto">
        <img src="/dot-left.png" className="mt-24 w-[68px] h-[68px]" />
        <img src="/people_okaying.png"/>
        <img src="/dot-right.png" className="mt-24 w-[84px] h-[84px]" />
      </div>
    </div>
  )
}

const PartnerSection = () => {
  const title = 'Our Partner'
  const images = ['Logo.png', 'Logo-1.png', 'Logo-2.png', 'Logo-3.png', 'Logo-4.png']
  
  return (
    <div className="py-16 text-center text-primary bg-[#706FE505] mt-10">
      <p className="font-bold text-xl">{ title }</p>
      <div className="flex justify-between container mx-auto mt-10 md:px-24">
        { images.map(item => (
          <img src={`/${item}`} key={item} />
        )) }
      </div>
    </div>
  )
}

const PortofoliosSection = () => {
  const lists = [
    { name: 'Kode Learn', slug: 'kode-learn', type: 'Web Based', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto' },
    { name: 'Kode Sport', slug: 'kode-sport', type: 'Web Based', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto' },
    { name: 'Kode Lorem', slug: 'kode-lorem', type: 'Web Based', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto' },
    { name: 'Kode Ipsum', slug: 'kode-ipsum', type: 'Web Based', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto' }
  ]
  
  return (
    <div className="container mx-auto mt-32 px-8 sm:px-0">
      <h1 className="text-3xl font-black text-center">
        <span className="text-primary">We Create Products </span>
        <span className="text-positive">Tailored </span>
        <span className="text-primary">To </span>
        <span className="text-positive">Client Needs </span>
      </h1>
      <p className="mb-28 text-center">The following are products or services we have worked on:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          lists.map((item, index) => (
            <div className="bg-white shadow-lg rounded-lg" key={index}>
              <a href="#">
                <img className="rounded-t-lg" src="/porto-1.png" />
              </a>
              <div className="p-5">
                <span className="text-sm">Jenis Aplikasi - {item.type}</span>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">{item.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className="bg-[#706FE505] px-8 mt-28 mb-48">
      <div className="container mx-auto py-10 md:px-32">
        <img src="/dots.png" />
        <h2 className="text-3xl font-black text-primary text-center -mt-10">Testimonials</h2>
        <h2 className="text-3xl font-black text-primary text-center">What They Says</h2>

        <div className="grid grid-cols-3 mt-10">
          <img src="/quotes_left.png" className="ml-auto mr-16" />
          <p className="text-justify mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
          <img src="/quotes_right.png" className="ml-16" />
        </div>

        <img src="/dots.png" className="ml-auto" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <PartnerSection />
      <PortofoliosSection />
      <Testimonials />
    </div>
  )
}