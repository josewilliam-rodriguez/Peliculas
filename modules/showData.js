export const showData = async (fetchedData, container) => {
    container.innerHTML = "";

    fetchedData.forEach((element, index) => {
        const div = document.createElement("div");
        div.classList.add("movie");
        div.setAttribute("id", element.id);

        const poster = element.poster;

        div.innerHTML = `
            <img src="${poster}" alt="${element.Title}" />
            <div class="hero-info">
                <h3>${element.Title}</h3>
                <span>${element.type}</span>
            </div>
            <div class="overview">
                <span>${element.Description}</span>
            </div>
        `;

        container.appendChild(div);
    });
};
