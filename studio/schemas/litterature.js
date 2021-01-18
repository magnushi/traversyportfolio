export default {
    name: "litterature",
    title: "Litterature",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "author",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "litteratureType",
            title: "Litterature type",
            type: "string",
            options: {
                list: [
                    {value: "Book", title:"Book"},
                    {value: "Podcast", title:"Podcast"},
                    {value: "Article", title:"Article"}
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
    ]
}