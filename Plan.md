Breed model{
description:	
Breed

breed	Breedstring($string)
title: Breed
Breed

country	Countrystring($string)
title: Country
Country

origin	Originstring($string)
title: Origin
Origin

coat	Coatstring($string)
title: Coat
Coat

pattern	Patternstring($string)
title: Pattern
Pattern

}

1 Make a request
Use fetch() in index.js to request the breed data. Start by retrieving just one breed.

2 Inspect the response
Use console.log() to inspect the returned data in your browser's developer console. Identify where the breed properties are located.

3 Display the data
Select the relevant HTML elements and populate them with the returned properties.

4 Implement searching
Listen for input in your search field. Use the entered text to find matching breeds, either through the API or from data you've already retrieved.