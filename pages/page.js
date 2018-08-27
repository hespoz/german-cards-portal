import React, {Component} from "react";
import Link from 'next/link';

class Page extends Component {
    static async getInitialProps({query}) {

        console.log("It is executed anytime the page is loaded or redirected", query)


        return query;
    }

    render() {
        return (
            <div>
                <div>Page {this.props.custom}</div>
                <Link as={'/page'} href={`/page`}>
                    <a>To Page</a>
                </Link>
            </div>
        )
    }

}

export default Page;