import { FaShoppingBag } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import {Link,Outlet} from "react-router-dom"
const Home = () => {
    return (
        <>
            <img id="img1" width="100%" height="100%" src="https://ae01.alicdn.com/kf/HTB1T_LupbZnBKNjSZFKq6AGOVXaL/Luxury-Handbags-Women-Bags-Designer-Genuine-Leather-Handbags-Sac-A-Main-Women-Shoulder-Crossbody-Messenger-Bag.jpg" />
            <div id="t">Timeless</div>
            <div id="e">Elequance</div>
            <div id="l">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi maxime odit libero soluta natus reprehenderit exercitationem, veritatis sequi eius assumenda consequuntur eaque quo. Numquam mollitia repellendus maiores eum a neque.</div>
            <div><button id="shop">SHOP COLLECTION</button></div>


            <section className="sec1">
                <article>
                    <div id="i"><FaShoppingBag /></div>
                    <div id="g">100% Genuine Leather</div>
                    <div id="l1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, repellat!</div>
                </article>
                <article>
                    <div id="i"><FaRegCommentDots /></div>
                    <div id="g">Minimalist</div>
                    <div id="l1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, labore.</div>
                </article>
                <article>
                    <div id="i"><FaShippingFast /></div>
                    <div id="g">Easy Returns</div>
                    <div id="l1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, labore.</div>
                </article>
                <article>
                    <div id="i"><CiGift /></div>
                    <div id="g">Ethically Crafted</div>
                    <div id="l1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, labore.</div>
                </article>
            </section>

            <section className="sec2">
                 <article className="ar1" >
                    {/* <img id="m" width="450px" height="530px" src="https://img.ltwebstatic.com/images3_spmp/2023/06/08/16862070865eb3a7a171d9611426a27217d0cca51b_thumbnail_900x.jpg" />  */}
                    <div id="for">TRENDY FOR GIRLS</div>
                    <div><button id="s">Shop Now</button></div>
                </article>
                <article className="ar2">
                    <img id="m" width="450px" height="530px" src="https://cdn.shopify.com/s/files/1/2556/2250/products/product-image-701661257.jpg?v=1567696138" />
                    <div id="forr">FOR WOMEN</div>
                    <div><button id="s">Shop Now</button></div>
                </article>
                <article>
                    <img id="m" width="460px" height="530px" src="https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/29686662/2024/5/23/7e968acd-2e03-4a99-8447-a3f1485fed941716439985492DivaDaleColourblockedPUStructuredHandheldBag1.jpg" />
                    <div>FOR ACCESSORIES</div>
                    <div><button id="s">Shop Now</button></div>
                </article>
            </section>


            <article className="fe">
                <div id="co">Featured Collection</div>
                <div id="h">Handmade leather bags for any occations</div>
            </article>

            <article className="new">
                <div><Link to="/bestsellers">BEST SELLERS</Link></div>
                <div id="l"><Link to="/newarrivals">NEW ARRIVALS</Link></div>
                <div><Link to="/bestreviewed">BEST REVIEWED</Link></div>
                <Outlet></Outlet>
            </article>


          


            <section className="sec3">
                <article>
                    <div><img width="300px" height="400px" src="https://demo.templatesjungle.com/leo/images/product-thumb-2.jpg" /></div>
                    <div id="ex">EXECUTIVE BRIEFCASE</div>
                    <div id="pr">$355.00</div>
                </article>
                <article>
                    <div><img width="300px" height="400px" src="https://th.bing.com/th/id/OIP.JKHy9bpMDlBuCnZUbYF8SQHaHa?rs=1&pid=ImgDetMain&cb=idpwebpc1" /></div>
                    <div id="ex">MINIMALIST CROSSBODY</div>
                    <div id="pr">$423.00</div>
                </article>
                <article>
                    <div><img width="300px" height="400px" src="https://demo.templatesjungle.com/leo/images/product-thumb-6.jpg" /></div>
                    <div id="ex">WEEKENDER DUFFLE</div>
                    <div id="pr">$255.00</div>
                </article>
                <article>
                    <div><img width="300px" height="400px" src="https://demo.templatesjungle.com/leo/images/product-thumb-8.jpg" alt="" srcset="" /></div>
                    <div id="ex">CLASSIC SATCHEL</div>
                    <div id="pr">$455.00</div>
                </article>
            </section>


            <section className="sec3">
                <article>
                    <div><img width="300px" height="400px" src="https://demo.templatesjungle.com/leo/images/product-thumb-9.jpg" /></div>
                    <div id="ex">EXECUTIVE BRIEFCASE</div>
                    <div id="pr">$355.00</div>
                </article>
                <article>
                    <div><img width="300px" height="400px" src="https://demo.templatesjungle.com/leo/images/product-thumb-12.jpg" /></div>
                    <div id="ex">MINIMALIST CROSSBODY</div>
                    <div id="pr">$423.00</div>
                </article>
                <article>
                    <div><img width="300px" height="400px" src="https://demo.templatesjungle.com/leo/images/product-thumb-13.jpg" /></div>
                    <div id="ex">WEEKENDER DUFFLE</div>
                    <div id="pr">$255.00</div>
                </article>
                <article>
                    <div><img width="300px" height="400px" src="https://demo.templatesjungle.com/leo/images/product-thumb-14.jpg" /></div>
                    <div id="ex">CLASSIC SATCHEL</div>
                    <div id="pr">$455.00</div>
                </article>
            </section>



            <div id="bl">Read Blog Post</div>
            <section className="sec4">
                <article>
                    <div><img id="ph" width="470px" height="300px" src="https://demo.templatesjungle.com/leo/images/post-image1.jpg" /></div>
                    <div id="fash">FASHION JUL 12,2025</div>
                    <div id="how">HOW TO LOOK OUTSTANDING IN PASTEL</div>
                    <div id="l1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias voluptas amet provident necessitatibus? Soluta dolores alias tempore quam vero!</div>
                </article>
                <article className="ti">
                    <div><img  id="ph"width="470px" height="300px" src="https://demo.templatesjungle.com/leo/images/post-image2.jpg"/></div>
                    <div id="fash">FASHION JUL 12,2025</div>
                    <div id="how">TOP 10 FESHION TREND FOR SUMMER</div>
                    <div id="l1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam repellat fugiat amet officia velit laudantium quidem voluptas voluptatem deleniti debitis.</div>
                </article>
                <article>
                    <div><img  id="ph" width="470px" height="300px" src="https://demo.templatesjungle.com/leo/images/post-image3.jpg"  /></div>
                    <div id="fash">FASHION JUL 12,2025</div>
                    <div id="how">CRAZY FASHION WITH UNIQUE MOMENT</div>
                    <div id="l1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ad error consectetur voluptatum at, culpa repellat nihil? Aliquid, soluta totam!</div>
                </article>
            </section>
            


            <section className="sec5">
              <div>
             <div id="our">SIGN UP FOR OUR NEWSLETTER</div>
             <input id="name" type="text" placeholder="Enter your name" /><br></br>
              <input id="email" type="text" placeholder="Enter Your Email Address" /><br></br>
              <button id="sign">SIGN UP</button>
              </div>
             </section>  
            
              
                <div id="fo">Follow us on Instagram</div>
             <section className="sec6">
           <Link to="https://templatesjungle.com/demo/?url=https://demo.templatesjungle.com/leo/&purl=https://templatesjungle.gumroad.com/l/leo-leathers-html-template"><img src="https://demo.templatesjungle.com/leo/images/insta-item1.jpg"width="470px" /></Link>
             <Link to="https://www.instagram.com/templatesjungle/"><img src="https://demo.templatesjungle.com/leo/images/insta-item2.jpg"width="470px" /></Link> 
                <Link to="https://www.instagram.com/templatesjungle/"><img src="https://demo.templatesjungle.com/leo/images/insta-item3.jpg"width="470px" /></Link>
                </section>
        </>
    )

}
export default Home