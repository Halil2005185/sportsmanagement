import newImage from "/images/newImage.jpg"
import play from "../../assets/play.mp4"
import NewCard from "../../components/NewCard/newCard"
function NewsContact() {
    return <section className="bg-[#121212] py-40">
        <div className="w-[90%] mx-auto">
            <p className="font-[Chakra_Petch]  text-[20px] text-[#D2FF00] leading-[100%] ">25 October 2025</p>
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[25px] md:text-[32px] lg:text-[48px] lg:pl-1 ">Academy latest news and updates</h2>
            <img src={newImage} alt="image" className="w-[90%] mx-auto rounded-[24px]" />
            <div className=" w-full lg:w-[900px] mx-auto flex flex-col gap-8 py-12 " >
                <p className="font-['Chakra_Petch'] text-[20px] leading-[100%] text-[#D5D7DA]">From first look to final player conversion, design impacts every step of a game's journey.
                    In the video game industry, graphic design isn’t just about aesthetics. It’s how studios communicate with publishers, players, and the wider gaming community. Whether it’s presenting a new project, preparing a crowdfunding campaign, or crafting a store page, design is what makes your message clear, appealing, and memorable.</p>
                <p className="font-['Chakra_Petch'] text-[20px] leading-[100%] text-[#D5D7DA]" >
                    Here are five essential reasons why graphic design is a critical tool for any game developer or studio.
                </p>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white ">First Impressions define Perception</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]" >The first visual contact someone has with your game will heavily influence how they perceive its quality and relevance.
                        This first impression might come from a Steam capsule, a pitch deck cover, a Kickstarter banner, or a social media teaser. If these visuals fail to quickly communicate what your game is about, or look unpolished, the opportunity for engagement is lost.
                        Even before gameplay videos or text descriptions, these images tell players or publishers whether the game feels premium, amateur, unique, or forgettable.
                        ➡ Example: A survival-horror game using bright, cartoonish visuals on its landing page sends a confusing signal. The design must match the tone of the experience you’re offering.</p>
                </div>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white " >First Impressions define Perception</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]" >The first visual contact someone has with your game will heavily influence how they perceive its quality and relevance.
                        This first impression might come from a Steam capsule, a pitch deck cover, a Kickstarter banner, or a social media teaser. If these visuals fail to quickly communicate what your game is about, or look unpolished, the opportunity for engagement is lost.
                        Even before gameplay videos or text descriptions, these images tell players or publishers whether the game feels premium, amateur, unique, or forgettable.
                        ➡ Example: A survival-horror game using bright, cartoonish visuals on its landing page sends a confusing signal. The design must match the tone of the experience you’re offering.</p>
                </div>
                <video
                    src={play}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full  object-cover h-[200px]  rounded-[25px] "
                ></video>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white " >Design Simplifies Complex ideas</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]" >Games are intricate products, and explaining unique gameplay mechanics, monetization models, or narrative systems in plain text is often ineffective.
                        Visual aids — like infographics, diagrams, wireframes, and UI mockups — are essential for making complex ideas easy to grasp at a glance.
                        ➡ Example: A roguelike with procedural map design can be far better explained with a simple diagram showing how levels evolve, rather than a lengthy paragraph of text.
                        Whether you’re preparing a pitch presentation for publishers or an onboarding tutorial for players, clear visuals enhance comprehension and retention.</p>
                </div>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white " >Good Design differentiates you in a Saturated Market</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]" >The gaming landscape is extremely competitive. High-quality design is one of the few reliable ways to stand out when players or stakeholders are quickly scrolling through endless options.
                        Polished design can elevate even small indie projects by making them look production-ready and professional.
                        ➡ Example: A Kickstarter campaign with consistent branding, custom visuals for reward tiers, and high-quality concept art is more likely to attract attention than a campaign relying on generic templates.
                        Design becomes a key differentiator that can either open doors or keep them firmly shut.</p>
                </div>
            </div>
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[25px] md:text-[32px] lg:text-[48px] "><span className="text-[#D2FF00]"> Related </span> Topics</h2>
            <div className="flex gap-4 overflow-x-auto ">
                <NewCard />
                <NewCard />
                <NewCard />
            </div>
        </div>
    </section>
}
export default NewsContact