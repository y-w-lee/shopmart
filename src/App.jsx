function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <div>
              <h1>Shop Mart</h1>
              <div>
                <button className="icon-btn">
                  <span>&#129293;</span>
                  <span className="badge">3</span>
                  </button>
                
                <button className="icon-btn">
                  <span>&#128722;</span>
                  <span className="badge">1</span>
                </button>
              </div>
            </div>
            <div>
              <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>All Products</button>
                <button>Wishlist</button>
              </nav>

              <form>
                <input type="search" placeholder="Search" />
              </form>
              <button type="button">Go</button>
            </div>
          </header>

          <main>
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>
            
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>            

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="" />
              <p className="pr-name">Shoes</p>
              <p className="pr-price">$40</p>
            </div>

          </main>


        </section>

        <footer>
          <div>
            <h3>Our Store</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Sell With Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3>Our Policies</h3>
            <ul>
              <li><a href="">Return Policies</a></li>
              <li><a href="">Shipping Policies</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our Products</h3>
            <ul>
              <li><a href="">Home Page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
            </ul>
          </div>

        </footer>
      </div>
      
  );
}

export default App;
