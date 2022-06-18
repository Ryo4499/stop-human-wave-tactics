import { Component } from 'react'

class Article extends Component {
        slug = -1
        title = ""
        content = ""
        category = {}
        thumbnail = {}
        user = {}

        constructor(props: any) {
                super(props)
                this.slug = props.slug
                this.title = props.title
                this.content = props.content
                this.category = props.category
                this.thumbnail = props.thumbnail
                this.user = props.user
        }
}
