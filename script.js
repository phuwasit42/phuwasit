function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section with animation
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');
  
    // Remove animation class from previously active section
    sections.forEach(section => {
      section.classList.remove('active', 'animate__animated'); // Remove 'active' and 'animate__animated' classes
    });
  
    // Show the selected section with animation
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active', 'animate__animated'); // Add 'active' and 'animate__animated' classes
  }

  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
  
    sections.forEach(section => {
      section.classList.remove('active', 'animate__animated'); // ลบ class สำหรับแอนิเมชัน
    });
  
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active', 'animate__animated'); // เพิ่ม class สำหรับแอนิเมชัน
  }

  // script.js
