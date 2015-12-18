nsGmx.DateInterval = Backbone.Model.extend({
    defaults: {
        dateBegin: null,
        dateEnd: null
    },
    
    saveState: function() {
        return {
            version: '1.0.0',
            dateBegin: +this.attributes.dateBegin,
            dateEnd: +this.attributes.dateEnd
        }
    },
    
    loadState: function(state) {
        this.set({
            dateBegin: new Date(state.dateBegin),
            dateEnd: new Date(state.dateEnd)
        })
    }
});