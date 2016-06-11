let markdown = require('markdown').markdown

let Markdownable = {
    data: () => {
        return {
            content: null
        }
    },
    computed: {
        contentToHtml: function (){
            let markup = this.content || ""
            return markdown.toHTML(markup)
        }
    }
}

module.exports = Markdownable