import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SinglePhotos from './SinglePhotos';
import Loading from '../components/Loading'
export class Photos extends Component {
    static defaultProps = {
        Mode: 'dark',
    }
    static propTypes = {
        Mode: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: false
        }
    }
    async componentDidMount() {
        console.log('cdm') 
        let url = 'https://api.unsplash.com/photos/random?count=50&&client_id=NQ1oepxAFJ3H4DK_250mSFWrO-kBCPcsf53Ua5n9vHM';
        // console.log(url)
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedata = await data.json();
        this.setState({ items: parsedata, loading: false })
        document.title = "Unsplash - Free Images"
    }

    render() {
        return (
            <>
                <div style={{minHeight:'100vh'}} className={`container-fluid my-0 mt-0 py-5 bg-${this.props.Mode}`}>
                    <div className='d-flex justify-content-center  flex-wrap'>
                        {this.state.loading && <Loading />}
                        {this.state.loading && <Loading />}
                        {this.state.loading && <Loading />}
                        {this.state.loading && <Loading />}
                        {this.state.loading && <Loading />}
                        {!this.state.loading && this.state.items.map((Element) => {
                            return <SinglePhotos key={Element.id} likes={Element.likes} src={Element.urls.thumb} downloadlink={Element.urls.full} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Photos
