import { Component } from 'react'

class User extends Component {
        slug = -1
        username = ""
        email = ""
        role = {}
        articles = {}

        constructor(props: any) {
                super(props)
                this.slug = props.slug
                this.username = props.username
                this.email = props.email
                this.role = props.role
                this.articles = props.articles
        }
}
