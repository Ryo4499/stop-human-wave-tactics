import { Component } from 'react'

class Category extends Component {
        slug = -1
        name = ""
        articles = {}

        constructor(props: any) {
                super(props)
                this.slug = props.slug
                this.name = props.name
                this.articles = props.articles
        }
}
