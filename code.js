class Calcul
{
    a;
    b;
    addition;
    multiplication;

    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    calculerAddition()
    {
        return this.addition = this.a + this.b;
    }

    calculerMultiplication()
    {
        return this.multiplication = this.a * this.b;
    }

}

function faireTableau(titre, tableau)
{
    let html = "";
    let x = 0;
    let xMax = 9;

    html += "<table><thead><tr><th colspan='10'>"+titre+"</th></tr></thead><tbody>";

    for (let y = 1; y <= 10; y++) 
    {
        html += "<tr>"; 
       
        while (x <= xMax) 
        { 
            html += "<td>"+tableau[x]+"</td>";
            x++;
        }
        html += "</tr>";
        x = xMax + 1;
        xMax = x + 9;
    }

    html += "</tbody></table>";

    return html;
}

function init()
{
    let additions = [];
    let multiplications = [];

    for (let y = 1; y <= 10; y++) 
    { 
        let calcul = [];
        let x = 1;
        while (true) 
        {     
            if (x <= 10)  
            {
                calcul[y] = [];   
                calcul[y][x] = new Calcul(y, x);
                additions.push(calcul[y][x].calculerAddition());
                multiplications.push(calcul[y][x].calculerMultiplication());
                x++;
            }
            else 
            {
                break;
            }       
        }
    }
    
    document.body.innerHTML = faireTableau("Tables des additions", additions);
    document.body.innerHTML += faireTableau("Tables des multiplications", multiplications);   
}