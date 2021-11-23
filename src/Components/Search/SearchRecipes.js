

export default function SearchRecipes(fullList,filters,search) {
    if (filters.length === 0) {
      return fullList.filter((rec) => {
        return rec.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    const output = fullList.filter((rec) => {
      let containsFilters = true;
      filters.forEach((l) => {
        if (!rec.labels.includes(l)) {
          containsFilters = false;
        }
      });
      return containsFilters;
    });
    // console.log(filters,output)
    
     return output.filter((rec) => {
       return rec.name.toLowerCase().includes(search.toLowerCase());
     });
}
