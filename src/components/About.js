const About = () => {
    return (
      <div className="container mt-5">
        {/* Hero Section */}
        <div className="bg-light p-5 rounded shadow-sm text-center">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead">
            Your go-to platform for sharing and discovering amazing content, 
            crafted with passion by a team of dedicated developers.
          </p>
        </div>
  
        {/* Mission & Vision Section */}
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="bg-primary text-white p-4 rounded shadow-sm">
              <h3>Our Mission</h3>
              <p>
                To empower individuals to express their ideas, connect with 
                others, and inspire the world through content creation.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-secondary text-white p-4 rounded shadow-sm">
              <h3>Our Vision</h3>
              <p>
                To become the leading platform for content sharing, fostering 
                creativity, collaboration, and growth in a global community.
              </p>
            </div>
          </div>
        </div>
  
        {/* Core Values Section */}
        <div className="mt-5">
          <h2 className="text-center">Our Core Values</h2>
          <div className="row text-center mt-4">
            <div className="col-md-4">
              <div className="p-3">
                <h4>Creativity</h4>
                <p>
                  Encouraging innovative and unique ideas in content creation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h4>Community</h4>
                <p>
                  Building strong connections and fostering collaboration.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h4>Excellence</h4>
                <p>
                  Striving for the highest quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Meet the Team Section */}
        <div className="mt-5">
          <h2 className="text-center mb-4">Meet the Team</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-1/369865538_6653028361478020_6227007946496683084_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHw-YC0jDtPDmISKUHYmbTc4breE8DIZsThut4TwMhmxC6KP3JrMyUZ2ePM3BFbWjs62kceWgIOm8xgBYI-beAN&_nc_ohc=H84T-3mbPf8Q7kNvgEol7II&_nc_zt=24&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AopIQqGJqk8tCofvJM3O_V6&oh=00_AYDGFyygurqt2ASb3olimKpSF5TYiy60T0m0jb25lxUnLQ&oe=675DF948"
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Brylle Renzy Diminsil</h5>
                  <p className="card-text">Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/357707727_6385924128141068_1881381892591779604_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHr4cAfaJMcmuks3UhLAazcWxhV-MG9wAVbGFX4wb3ABZQn1rZoN9dnsysRED8-Be6ONKc2i_g0UZqQSaPzrfbf&_nc_ohc=0s5VpBH8RJgQ7kNvgG4-RxB&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&_nc_gid=AIHds6Ll74goJk8C5OD1XrZ&oh=00_AYDnl9BAm-IJHEBLTUpPu0jalTLw6W4ra8kvEKTyn-2c0A&oe=675E0AFC"
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Julian Carlos Torno</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/154617712_3708294709264875_3031566544765844958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG43vk6tf4Qz89xbvI959ZVJyIqPRFDYP4nIio9EUNg_nE7NksdJVgoTZ9PBrFRC0qI_tm5KAbssDouMVpJAG-c&_nc_ohc=2jXjQkMbQkMQ7kNvgGj5m1f&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=AERmjsqvPsh_5EzIYEkTz1w&oh=00_AYBdKNcmLa56xWQR-5SN2P__8YaTQgjhHSKJLZp17Y2IKg&oe=6776985F"
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Bien Guillan Tubil</h5>
                  <p className="card-text">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  