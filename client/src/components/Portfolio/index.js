import React from 'react'
import { Container, Col } from 'react-bootstrap'
import AnimatedHeading from '../animated-heading'
import AnimationContainer from '../animation-container'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import PortfolioItem from './parts/PortfolioItem.js'
import { PortfolioContainer } from './PortfolioSection'

class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const settings = {
            dots: true,
            swipe: true,
            infinite: true,
            speed: 500,
            slidesToScroll:  this.state.width < 500 ? 1 : 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 10000,
            loop: true,
            slidesToShow: this.state.width < 500 ? 1 : this.state.width > 500 && this.state.width <= 1024 ? 3 : 4,

        }

        return (
            <Col md={12} style={{padding: 0}}>
                <Container>
                    <AnimatedHeading text="Recent projects" />
                </Container>
                <PortfolioContainer>
                    <AnimationContainer animation="fadeIn">
                        <Slider {...settings}>
                            {this.portfolio()}
                        </Slider>
                    </AnimationContainer>
                </PortfolioContainer>
            </Col>
        )
    }

    portfolio() {
        const items = [ {src: "./portfolio/petclinicProject.png", title: "Pet Clinic Project", category: "AngularJS + Java SpringBoot", link: "https://github.com/Funnyadd/champlain_petclinic"},
                        {src: "./portfolio/BC-Engine.png", title: "B&C Engine", category: "ReactJS + ExpressJS", link: "https://github.com/BC-Engine-Team/BC-Engine"},
                        {src: "./portfolio/wpfCalculator.png", title: "WPF Calculator", category: "C# + WPF (UI/UX Project)", link: "https://github.com/Funnyadd/WPF_Calculator"},
                        {src: "./portfolio/personalWebsite.png", title: "Personal Website", category: "GatsbyJS (UI/UX Project)", link: "https://github.com/Funnyadd/personal-website"},
                        {src: "./portfolio/empty.png", title: "Nothing Yet...", category: "", link: ""},
                        {src: "./portfolio/empty.png", title: "Nothing Yet...", category: "", link: ""} ];

        return items.map((value, index) => {
          return (
            <PortfolioItem 
              key={index}
              index={index} 
              image={value.src} 
              text={value.title} 
              category={value.category}
              link={value.link}
              type="slider"
            />
          )
        })
      }
}
export default Portfolio

// export default props => (
//     <StaticQuery
//         query={graphql`
//             query {
//                 items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 9) {
//                   edges {
//                     content: node {
//                       frontmatter {
//                         id
//                         title
//                         category
//                         link
//                         image {
//                           childImageSharp {
//                             fluid(maxWidth: 1000) {
//                               src
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }           
//             `}
//         render={({ items }) => <Portfolio items={items.edges} {...props} />}
//     />
// )