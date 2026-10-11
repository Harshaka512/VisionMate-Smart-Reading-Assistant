/**
 * VisionMate — Milestones Interactive Filter & Selector
 * Complies with SLIIT CDAP Guideline (Slide 11):
 * Provides a drop-down selector to choose assessments, highlighting assessment criteria,
 * dates, deliverables, and marks allocated (%).
 */

document.addEventListener('DOMContentLoaded', () => {
  const milestoneSelect = document.getElementById('milestone-dropdown-select');
  const milestoneItems = document.querySelectorAll('.milestone-item');
  const quickFilterBtns = document.querySelectorAll('.ms-filter-btn');

  if (!milestoneSelect) return;

  function highlightMilestone(targetId) {
    if (!targetId || targetId === 'all') {
      milestoneItems.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('highlighted');
      });
      return;
    }

    milestoneItems.forEach(item => {
      if (item.id === targetId) {
        item.style.display = 'block';
        item.classList.add('highlighted');
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        item.classList.remove('highlighted');
      }
    });
  }

  // Handle dropdown change
  milestoneSelect.addEventListener('change', (e) => {
    highlightMilestone(e.target.value);
  });

  // Handle quick filter buttons (All, Completed, Upcoming)
  quickFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quickFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      milestoneItems.forEach(item => {
        if (filter === 'all') {
          item.style.display = 'block';
        } else if (filter === 'completed') {
          item.style.display = item.classList.contains('completed') ? 'block' : 'none';
        } else if (filter === 'upcoming') {
          item.style.display = !item.classList.contains('completed') ? 'block' : 'none';
        }
      });
    });
  });
});
