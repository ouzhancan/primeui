xtag.register('p-rating', {
    
    content: '<input type="hidden" />',
    
    accessors: {
        stars: {
            attribute: {}
        },
        cancel: {
            attribute: {}
        },
        readonly: {
            attribute: {
                boolean: true
            }
        },
        disabled: {
            attribute: {
                boolean: true
            }
        },
        name: {
            attribute: {}
        },
        onrate: {
            attribute: {}
        },
        oncancel: {
            attribute: {}
        }
    },
    
    lifecycle: {
        created: function () {  
            var $this = this,
            options = {
                stars: this.stars||5,
                cancel: this.cancel ? JSON.parse(this.cancel) : true,
                readonly: this.readonly,
                disabled: this.disabled,
                rate: this.onrate ? function(event, value){PUI.executeFunctionByName($this.onrate, window, event, value);} : null,
                oncancel: this.oncancel ? function(event, value){PUI.executeFunctionByName($this.oncancel, window);} : null
            };
            
            if(this.name) {
                this.children[0].name = this.name;
            }
            
            $(this.children[0]).puirating(options);
        }
    }
});