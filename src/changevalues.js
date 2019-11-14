function change(value)
{
switch(value)
{

    case "1":
        value="VERY BAD";
        break;
    case "2":
        value="COULD BE BETTER";
        break;
    case "3":
        value="FINE";
        break;
    case "4":
        value="GOOD";
        break;
    case "5":
        value="EXCELLENT";
        break;
    default:
        alert("NOPE");
}
return value;

}