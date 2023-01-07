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

const DataProject = ({allPosts}) => {
    return (
        <>
        <HeadTitle pageTitle="The Data Project" />
            <HeaderOne postData={allPosts} />
            <BreadcrumbTwo
                title="The Data Project"
                paragraph="Quantifying Black Death in American Horror Films"
                bgImae="url('https://res.cloudinary.com/think-halcyon-llc/image/upload/v1673119648/The%20Fright%20Queen/Data%20Project/NightOfTheLivingDead_ckrlpp.jpg')"
            />
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            {/* Start About Area  */}
                            <div className="axil-about-us">
                                <div className="inner">
                                    <h3>Quantifying Black Death in American Horror Films</h3>
                                    <p>If you’re anything like me, then you grew up with the indisputable knowledge that most, if not all, Black folk died in horror movies.  It wasn’t just enough for us to die, we had to die horribly and our deaths had specific meanings.  If a Black man, in particular, died at the hands of a monster or some sort of creature (yes, I’m looking at you Jurassic Park), it was likely meant to signify how terrible that thing was that the white folk would have to somehow beat.  And if it was a slasher or a ghost story, regardless of where the character fell on the gender spectrum, they would die for usually one of these two reasons: protecting a white person (I will NEVER accept the ending of Annabelle) or just thinning the herd so that the more important characters (not the multicultural tokens) could live.  This common occurrence was so prevalent that my friends and family would often make bets on how long any given Black person would survive whatever gruesome ordeal awaited them and their white counterparts.  It was so widespread in the American psyche that everyone knew “<a href="https://blackguyalwaysdiesfirst.tumblr.com/" target="_blank">the Black guy always dies first</a>.”</p>
                                    
                                    <div style={{marginBottom: "5%"}}>
                                        <img src="https://res.cloudinary.com/think-halcyon-llc/image/upload/v1673119666/The%20Fright%20Queen/Data%20Project/TheBoondocks_CS_Matrix_oaowyt.gif" alt="Image Credit: NeoGAF | The Boondocks" width={800}></img>
                                        <br/>
                                        <small>Image Credit: NeoGAF | The Boondocks</small>
                                    </div>
                                    
                                    <h3>But is that true?  And, is it still true?</h3>
                                    <p>I like to consider myself a data nerd, or rather someone who can stand to look at rows and rows of numbers and not get frustrated.  So with that in mind, I thought to myself, why not figure out a way to answer a burning question in my mind? And because it's me, I’ve got lots of questions:</p>

                                    <div style={{paddingLeft: "5%", marginBottom: "5%"}}>
                                        <p>1. Compared to other races and gender identities, does the Black guy always die first?</p>
                                        <p>2. What is the average duration (deaths per movie minute) for a Black character to survive in an American horror film?</p>
                                        <p>3. If Black people are prone to dying in American horror films, has this changed by decade?</p>
                                        <p>4. Does gender play a role in how long a Black character survives?  Is the Final Girl Phenomenon protective for Black women?</p>
                                        <p>5. Which Black actor has died the most across all American horror films?</p>
                                        <p>6. Which Black actor has survived the most across all American horror films?</p>
                                        <p>7. In which year was the first Black actor cast in an American horror film?</p>
                                        <p>8. Which year has the most Black actors in American horror films?</p>
                                        <p>9. Which year has the most Black deaths in American horror films?</p>
                                        <p>10. Which year has the least Black deaths in American horror films?</p>
                                    </div>
                                    
                                    <p>It’s not simple, but I'm going to pretend that it is.  My plan of action is to start with my hypothesis: Black characters used to be the first to die in most horror films, but there was a point in time when that ceased to be the case.  I think that there was a shift in the collective American psyche, watching habits, or willingness to watch more movies with top-billed Black actors that lead to it being less acceptable for us to constantly die.  Based on the questions I outlined above, I’m not going to figure out why this shift happened, but I would like to know approximately when it happened and how likely a Black character was to die before and after that shift.</p>
                                    <p>Next will be what I think is going to be the hardest part of this project, collecting all the relevant data.  Yeah sure, I can go to IMDb and download their public and open datasets (already have), but I will need more data — data that IMDb doesn't collect.  The foci of my project are whether or not a Black character died and how long into the movie did this death occur (note: in the instance of supernatural horror, the final death is what will count. For example, I would count the True Death of Eddie Murphy’s character Maximillian in Vampire in Brooklyn and not his off-screen Embrace as a vampire — can you tell I’ve played Vampire: the Masquerade?).  Depending on how many deaths I have to sort through, I will either gather data on the entire population of Black characters who have died in American horror films or (which is much more likely) use a smaller subset to focus on (sample sizes and margins of error and all that!).  It is in this stage of the work that I may ask for outside help to collaborate on finding out the specific timestamps that any given character bit the dust.</p>
                                    <p>And then, the real fun begins!  I’ll start to analyze the data and focus on the questions above.  Based on what I find out, I might add more questions or learn things that I never even imagined.  You might not be able to tell, but I’m really excited about this stage.  Once the analysis is complete, I’ll compile my findings in a blog post and share my visualizations on both Tableau Public and here as well.  So if you’re interested in helping, <a href="mailto:jo@thefrightqueen.com" target="_blank">please let me know!</a></p>
                                    
                                    <h3>The More You Know</h3>
                                    <p>According to <a href="http://cbr.com/" target="_blank">CBR.com</a>, as of September 2020, Danny Trejo is the current record holder for on-screen deaths at a whopping 65!  What’s important to note here is that the myth of the Black Guy Always Dies First is not limited to Black people.  According to <a href="http://tvtropes.org/" target="_blank">tvtropes.org</a>, this wretched phenomenon happens to any non-white racial/ethnic group.  Either way you look at it, it still sucks.</p>
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

export default DataProject;

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