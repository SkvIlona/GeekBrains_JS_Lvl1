
// 1 
       
let colomn_names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
let colomn_left
let colomn_right
let stroke_number
let colomn = []
let cell



let chess = document.createElement("div")
chess.className = "chess"
document.body.appendChild(chess)

function create_colomn_left() {
    colomn_left = document.createElement("div")
    colomn_left.className = "colomn_left"
    chess.appendChild(colomn_left) 

       for (let i = 9; i >= 0; i--)
    {
        let stroke_number = document.createElement("div")
        stroke_number.className = "stroke_number"
        if (i >= 1 && i <= 8)
        {
           stroke_number.innerHTML = i  
        }
        colomn_left.appendChild(stroke_number)
    }    
}

function create_colomn_right() {
    colomn_right = document.createElement("div")
    colomn_right.className = "colomn_right"
    chess.appendChild(colomn_right)

    for (let i = 9; i >= 0; i--)
    {
        let stroke_number = document.createElement("div")
        stroke_number.className = "stroke_number"
        if (i >= 1 && i <= 8)
        {
           stroke_number.innerHTML = i  
        }
        colomn_right.appendChild(stroke_number)
    } 
}

function create_colomn_with_cell(i) {

    colomn = document.createElement("div")
    colomn.className = "colomn"
    colomn.id = colomn_names[i]
       
    chess.appendChild(colomn);

    create_cell(i,colomn)
}


function create_cell(j,colomn) {

    for (let i =10; i >=1; i--) {
        
        cell = document.createElement("div")
        if (i == 1 || i == 10) 
            {
                cell.innerHTML = colomn_names[j]
                cell.className = "cell_name"
            } else {
                    if (i % 2 == j % 2) {
                        cell.className = "cell_white"
                    } else {
                        cell.className = "cell_black"
                    }
                    
                } 
        
        
        colomn.appendChild(cell) 
    }

}

create_colomn_left()


for (let i = 0; i < 8; i++) {
    create_colomn_with_cell(i)
}

create_colomn_left()







