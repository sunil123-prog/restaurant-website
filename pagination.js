document.addEventListener("DOMContentLoaded", function() {
    var currentPage = 1;
    var itemsPerPage = 1; // Change this value to adjust items per page
  
    var itemList = document.getElementById("itemList");
    var pagination = document.getElementById("pagination");
  
    var items = itemList.querySelectorAll(".list-group-item");
    var totalItems = items.length;
    var totalPages = Math.ceil(totalItems / itemsPerPage);
  
    function showPage(page) {
      var startIndex = (page - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;
  
      items.forEach(function(item, index) {
        if (index >= startIndex && index < endIndex) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  
    function renderPagination() {
      pagination.innerHTML = ""; // Clear pagination
      for (var i = 1; i <= totalPages; i++) {
        var li = document.createElement("li");
        li.classList.add("page-item");
        var a = document.createElement("a");
        a.classList.add("page-link");
        a.href = "#";
        a.textContent = i;
        a.addEventListener("click", function(event) {
          event.preventDefault();
          currentPage = parseInt(event.target.textContent);
          showPage(currentPage);
          updateActivePage(currentPage);
        });
        li.appendChild(a);
        pagination.appendChild(li);
      }
      updateActivePage(currentPage);
    }
  
    function updateActivePage(page) {
      var paginationItems = pagination.querySelectorAll(".page-item");
      paginationItems.forEach(function(item) {
        item.classList.remove("active");
      });
      paginationItems[page - 1].classList.add("active");
    }
  
    showPage(currentPage);
    renderPagination();
  });