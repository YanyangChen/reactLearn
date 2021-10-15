class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
    }

    const square = new Rectangle(10, 10);
   // console.log(square.area);

    class Statement {
        constructor(id, type, root, branch, reference, referee, desc)
        {
            this.id = id;
            this.desc = desc;
            this.type = type;
            this.root = root;
            this.branch = branch;
            this.referee=referee;
            this.reference=reference;
        };

        setId(id){
            this.id = id;
            return this;
        };

        setDesc(desc){
            this.desc = desc;
            return this;
        };
        setUrl(url){
            this.url = url;
            return this;
        };
        setType(type){
            this.type = type;
            return this;
        };
        setRoot(root){
            this.root = root;
            return this;
        };
        setBranch(branch){
            this.branch = branch;
            return this;
        };
        setReference(reference){
            this.reference = reference;
            return this;
        };
        setReferee(referee){
            this.referee = referee;
            return this;
        };

        
    }

    

    // let StatementBuilder = function () {
        
    //     return {
    //         setId: function (id){
    //             this.id = id;
    //             return this;
    //         },
    //         setDesc: function (desc){
    //             this.desc = desc;
    //             return this;
    //         },
    //         setType: function (type){
    //             this.type = type;
    //             return this;
    //         },
    //         setRoot: function (root){
    //             this.root = root;
    //             return this;
    //         },
    //         setBranch: function (branch){
    //             this.branch = branch;
    //             return this;
    //         },
    //         setReference: function (reference){
    //             this.reference = reference;
    //             return this;
    //         },
    //         setReferee: function (referee){
    //             this.referee = referee;
    //             return this;
    //         },
    //         build: function () {
    //         return new Statement(this.id, this.type, this.root, this.branch, this.referee, this.reference, this.desc);
    //     }
    //     };
    // };

        //var expStmt = new Statement(["r1"],["b1"]);
       // let bltStmt = new StatementBuilder().setType('b').setRoot('c').setBranch('d').setReference('referer').setReferee('').build();
       // let bltStmt2 = new StatementBuilder().setType('b').setRoot('c').setBranch('d').setReference(bltStmt).setReferee('referee').build();
        //console.log(expStmt);
        //console.log(bltStmt2);