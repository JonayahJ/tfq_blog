import InstagramOne from "../common/components/instagram/InstagramOne";
import BreadcrumbTwo from "../common/elements/breadcrumb/breadcrumbTwo";
import HeaderOne from "../common/elements/header/HeaderOne";
import { getAllPosts } from '../../lib/api';
import WidgetCategory from "../common/components/sidebar/WidgetCategory";
import WidgetSearch from "../common/components/sidebar/WidgetSearch";
import WidgetPostList from "../common/components/sidebar/WidgetPostList";
import WidgetSocialShare from "../common/components/sidebar/WidgetSocialShare";
import HeadTitle from "../common/elements/head/HeadTitle";
import FooterTwo from "../common/elements/footer/FooterTwo";

const BlackHorror = ({allPosts}) => {
    return (
        <>
        <HeadTitle pageTitle="Black Horror" />
            <HeaderOne postData={allPosts} />
            <BreadcrumbTwo
                title="Black Horror"
                paragraph="It's more than skin deep."
                bgImae="url('https://res.cloudinary.com/think-halcyon-llc/image/upload/v1672980799/The%20Fright%20Queen/Tony-Todd-as-Candyman-in-Candyman_-Farewell-to-the-Flesh-1995_fjqhv5.jpg')"
            />
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            {/* Start About Area  */}
                            <div className="axil-about-us">
                                <div className="inner">
                                    <h3>What is Black Horror anyway?</h3>
                                    <p>Well before we can answer this question, we have to reestablish what plain ol' horror is.  In the blog post, <a href="/post/what-is-horror-exactly-and-why-do-we-like-it-so-much">What Is Horror Exactly and Why do We Like It So Much?</a>, we quoted children's author R. L. Stine saying that which distinguishes horror from other genres is its intent "to elicit a sense of dread in the reader through frightening images, themes, and situations.  A horror story often shocks and provokes with its exploration of the unknown."  Now with that in mind, we can start to answer the question of what constitutes Black Horror.  UCLA's "The Sunken Place: Racism, Survival, and the Black Horror Aesthetic" Professor Tananarive Due was interviewed by <a href="https://shadowandact.com/">Shadow and Act</a> back in March 2019.  In this interview, Professor Due tells us about the Black Horror aesthetic:</p>
                                    <blockquote style={{padding: "0 7.5%", color:"#A4161A", fontWeight: "800"}}>
                                        When I say the Black Horror aesthetic, it means [that] we're in it, like, there's no racial context to it, it's not about opposition between Black and white.  [It's] still revolutionary today to have a horror movie with a primary protagonist or a strong secondary protagonist who just happens to be Black.  So just having a Black character who survives the movie, who isn't there as sassy comic relief or to sacrifice themselves for somebody else or to just impart wisdom to the other characters... is huge.
                                    </blockquote>
                                    <p>I think that what Professor Due said is key to understanding what separates Black Horror from the myriad other subgenres.  Black Horror is about perspective. The concept that there are main and secondary characters that happen to be Black but are not used as plot devices or tropes to move the story along, like the sacrificial negro or the wise negro, is what I consider to be Black Horror.  These films are told from the standpoint of a Black character who makes the decisions a Black person would make, and not for the sake of anyone other than themselves. These are fully fleshed-out characters who have backstories, motivations, flaws, etc.  In the interview, Professor Due also notes that Black Horror does not necessarily need to exist in opposition to whiteness.  It can just be a story where we simply exist as 3-dimensional characters.</p>
                                    {/* image */}
                                    <img src="https://res.cloudinary.com/think-halcyon-llc/image/upload/v1672980477/The%20Fright%20Queen/Black_Horror_FEHT_q50iib.jpg" alt="Final Exam Horror Trivia Composite Image"></img> 
                                    <small><center>Image Credit: Final Exam Horror Trivia @FinalExamHorror | From left to right, top to bottom: Tales from the Hood, Candyman, Eve's Bayou, Get Out, Bones, Us.</center></small>
                                    <br/>
                                    <br/>
                                    <p>You can watch the clip of the Shadow and Act interview with Professor Due <a href="https://shadowandact.com/what-is-black-horror-the-sunken-place-professor-tananarive-due-explains" target="_blank">here</a>. You can also take the <a href="https://hipshot9.clickfunnels.com/sales-page17636596" target="_blank">12-hour online course</a> as well (yes it is paid, no it ain't cheap, but why should it be?).  You might also be wondering where you've seen Professor Due before.  Well, if you watched the documentary <a href="https://the-fright-queen-blog.ghost.io/ghost/A%20History%20of%20Black%20Horror" target="_blank">Horror Noire: A History of Black Horror</a>, you might recognize her as one of the featured interviewees.</p>
                                    <h3>Where should you start on your Black Horror journey?</h3>
                                    <p>Another thing Professor Due said in her interview was that Black Horror appeals to wider audiences, not just to Black folk.  Even if you are or you aren't Black, Black Horror is for you.  After all, I've watched scores of Asian Horror movies and TV series, and that's for me too despite my non-Asian ancestry.  So, if you are in the mood to watch a good movie that is told from the perspective of a Black main or secondary character, just dive in!</p>
                                    <p>Here are 10 titles to get you started (note: adding <a href="https://www.imdb.com/name/nm1443502/?ref_=nv_sr_srsg_0" target="_blank">Jordan Peele</a> movies to this list would be too easy, though you should watch them):</p>
                                    <p style={{paddingLeft: "7.5%"}}>
                                        1. <a href="https://www.imdb.com/title/tt0063350/?ref_=nv_sr_srsg_0" target="_blank">Night of the Living Dead (1968)</a><br/>
                                        2. <a href="https://www.imdb.com/title/tt0103919/?ref_=nv_sr_srsg_3" target="_blank">Candyman (1992)</a><br/>
                                        3. <a href="https://www.imdb.com/title/tt6560164/?ref_=nv_sr_srsg_1" target="_blank">Sweetheart (2019)</a><br/>
                                        4. <a href="https://www.imdb.com/title/tt0114825/?ref_=fn_al_tt_1" target="_blank">Vampire in Brooklyn (1995)</a><br/>
                                        5. <a href="https://www.imdb.com/title/tt0068284/?ref_=fn_al_tt_1" target="_blank">Blacula (1972)</a><br/>
                                        6. <a href="https://www.imdb.com/title/tt0068619/" target="_blank">Ganja & Hess (1973)</a><br/>
                                        7. <a href="https://www.imdb.com/title/tt0120177/?ref_=vp_back" target="_blank">Spawn (1997)</a><br/>
                                        8. <a href="https://www.imdb.com/title/tt0114609/?ref_=nv_sr_srsg_0" target="_blank">Tales from the Hood (1995)</a><br/>
                                        9. <a href="https://www.imdb.com/title/tt10772662/?ref_=nv_sr_srsg_0" target="_blank">The Boy Behind the Door (2020)</a><br/>
                                        10. <a href="https://www.imdb.com/title/tt0119080/?ref_=nv_sr_srsg_0" target="_blank">Eve's Bayou (1997)</a>
                                    </p>
                                    <p>Now, these titles are in no particular order.  They are just really good movies to watch in my opinion.  There's a little bit for everyone on this list.  So queue them up on your nearest streaming device and enjoy!</p>
                                    {/* TENOR GIF */}
                                    <img src="https://res.cloudinary.com/think-halcyon-llc/image/upload/v1672980610/The%20Fright%20Queen/MJ_popcorn_zfzrkw.gif" alt="Michael Jackson eating popcorn at the movies in 'Thriller'" width="100%"></img> 
                                    <small><center>Image Credit: Tenor | Michael Jackson eating popcorn at the movies in "Thriller"</center></small>
                                    <br/>
                                    <br/>
                                    <p>If you want more Black Horror movies, check out <b>Rotten Tomatoes'</b> list of 25 best <a href="https://editorial.rottentomatoes.com/guide/essential-movies-black-horror/" target="_blank">Black Horror films</a>. Honestly, just Google Black Horror movies and you're bound to find a plethora. We've got a lot of monsters to slay, vampires to stake, and demons to send back to the depths of Hell. The only difference is in our stories, we won't be sacrificing ourselves to stop demented porcelain dolls. Yes, I'm still angry about Annabelle!</p>
                                </div>
                            </div>
                            {/* End About Area  */}
                        </div>
                        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                            <div className="sidebar-inner">
                                <WidgetCategory catData={allPosts} />
                                <WidgetSearch />
                                <WidgetPostList postData={allPosts} />
                                <WidgetSocialShare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InstagramOne parentClass="bg-color-grey" />
            <FooterTwo />
        </>
    );
}

export default BlackHorror;

export async function getStaticProps() {
    const allPosts = getAllPosts([
      'id',
      'title',
      'featureImg',
      'featured',
      'date',
      'slug',
      'cate',
      'cate_img',
      'author_img',
      'author_name',
      'post_views',
    ])
  
    return {
      props: { allPosts }
    }
  }