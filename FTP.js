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
    console.log(square.area);

    class Statement {
        constructor(id, type, root, branch, referer, referee)
        {
            this.id = id;
            this.type = type;
            this.root = root;
            this.branch = branch;
            this.referee=referee;
            this.referer=referer;
        }

    }

    let StatementBuilder = function () {
        
        return {
            setId: function (id){
                this.id = id;
                return this;
            },
            setType: function (type){
                this.type = type;
                return this;
            },
            setRoot: function (root){
                this.root = root;
                return this;
            },
            setBranch: function (branch){
                this.branch = branch;
                return this;
            },
            setReferer: function (referer){
                this.referer = referer;
                return this;
            },
            setReferee: function (referee){
                this.referee = referee;
                return this;
            },
            build: function () {
            return new Statement(this.id, this.type, this.root, this.branch, this.referee, this.referer);
        }
        };
    };

        //var expStmt = new Statement(["r1"],["b1"]);
        let bltStmt = new StatementBuilder().setType('b').setRoot('c').setBranch('d').setReferer('referer').setReferee('').build();
        let bltStmt2 = new StatementBuilder().setType('b').setRoot('c').setBranch('d').setReferer(bltStmt).setReferee('referee').build();
        //console.log(expStmt);
        console.log(bltStmt2);