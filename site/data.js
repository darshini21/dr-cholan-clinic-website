/* Clinic data — edit here, the page updates itself. */
window.CLINIC = {
  whatsapp: "919360401654",

  /* Per-service booking.
     schedule: one entry per weekday (0 = Sunday … 6 = Saturday), each a list of
     [from, to] sessions in minutes from midnight. slot = minutes per booking slot.
     onRequest: weekdays bookable "by appointment only" (no fixed slots; the clinic fixes the time). */
  doctors: {
    ortho: {
      name: "Dr. C. Srinivasacholan",
      short: "Dr. Srinivasacholan",
      img: "img/doc-s-portrait.webp",
      // Mon–Fri 6–10 pm; Saturday by appointment only
      schedule: [[], [[18 * 60, 22 * 60]], [[18 * 60, 22 * 60]], [[18 * 60, 22 * 60]], [[18 * 60, 22 * 60]], [[18 * 60, 22 * 60]], []],
      onRequest: [6],
      slot: 15,
      fee: "General consultation ₹400, pay at the clinic",
      purposes: ["Bones & joints consultation", "Follow-up visit", "Bone density camp", "Second opinion"]
    },
    derma: {
      name: "Dr. G.P. Rekha Cholan",
      short: "Dr. Rekha Cholan",
      img: "img/doc-r-portrait.webp",
      // Mon–Fri 6–9 pm; Mon, Wed & Sat also 10 am–1 pm
      schedule: [
        [],                                        // Sun
        [[10 * 60, 13 * 60], [18 * 60, 21 * 60]],  // Mon
        [[18 * 60, 21 * 60]],                      // Tue
        [[10 * 60, 13 * 60], [18 * 60, 21 * 60]],  // Wed
        [[18 * 60, 21 * 60]],                      // Thu
        [[18 * 60, 21 * 60]],                      // Fri
        [[10 * 60, 13 * 60]]                       // Sat
      ],
      slot: 15,
      fee: "Pay at the clinic",
      purposes: ["Skin & hair consultation", "Laser treatment", "Follow-up visit", "Aesthetic procedure", "Child's skin problem"]
    },
    physio: {
      name: "Advanced Physiotherapy & Pain Relief",
      short: "Physiotherapy",
      label: "Service",
      img: "img/physio-band.webp",
      // Mon–Fri 10 am–4 pm & 6:30–9 pm; Sat 10 am–4 pm
      schedule: [
        [],                                              // Sun
        [[10 * 60, 16 * 60], [18 * 60 + 30, 21 * 60]],  // Mon
        [[10 * 60, 16 * 60], [18 * 60 + 30, 21 * 60]],  // Tue
        [[10 * 60, 16 * 60], [18 * 60 + 30, 21 * 60]],  // Wed
        [[10 * 60, 16 * 60], [18 * 60 + 30, 21 * 60]],  // Thu
        [[10 * 60, 16 * 60], [18 * 60 + 30, 21 * 60]],  // Fri
        [[10 * 60, 16 * 60]]                             // Sat
      ],
      slot: 30,
      fee: "Senior physiotherapist consultation, pay at the clinic",
      purposes: ["Physiotherapy session", "Pain relief consultation", "Post-surgery rehab", "Sports injury rehab", "Follow-up session"]
    }
  },

  /* Clinic opening hours by day (0 = Sunday … 6 = Saturday), minutes from midnight.
     The combined hours of all three services above. */
  hours: [
    [],                                        // Sun
    [[10 * 60, 16 * 60], [18 * 60, 22 * 60]],  // Mon
    [[10 * 60, 16 * 60], [18 * 60, 22 * 60]],  // Tue
    [[10 * 60, 16 * 60], [18 * 60, 22 * 60]],  // Wed
    [[10 * 60, 16 * 60], [18 * 60, 22 * 60]],  // Thu
    [[10 * 60, 16 * 60], [18 * 60, 22 * 60]],  // Fri
    [[10 * 60, 16 * 60]]                       // Sat
  ],
  hoursTable: [
    { day: 1, label: "Monday", text: "10 am – 4 pm, 6 – 10 pm" },
    { day: 2, label: "Tuesday", text: "10 am – 4 pm, 6 – 10 pm" },
    { day: 3, label: "Wednesday", text: "10 am – 4 pm, 6 – 10 pm" },
    { day: 4, label: "Thursday", text: "10 am – 4 pm, 6 – 10 pm" },
    { day: 5, label: "Friday", text: "10 am – 4 pm, 6 – 10 pm" },
    { day: 6, label: "Saturday", text: "10 am – 4 pm" },
    { day: 0, label: "Sunday", text: "Closed" }
  ],
  hoursNote: "Ortho: Mon–Fri 6 – 10 pm, Sat by appointment · Derma: Mon–Fri 6 – 9 pm; Mon, Wed & Sat 10 am – 1 pm · Physio: Mon–Fri 10 am – 4 pm & 6:30 – 9 pm; Sat 10 am – 4 pm",

  finder: {
    knee:     { dept: "Bones & joints", who: "See Dr. Srinivasacholan, then physiotherapy", title: "Knee pain", text: "Arthritis, a twisted knee or worn cartilage usually improve with medicines, an injection and physiotherapy. Replacement is considered only when the joint is badly worn." },
    back:     { dept: "Bones & joints", who: "See Dr. Srinivasacholan, then physiotherapy", title: "Back or neck pain", text: "He'll check for disc, nerve or posture problems and pair treatment with traction and exercises. Come in soon if the pain spreads down an arm or leg, or causes numbness." },
    fracture: { dept: "Bones & joints", who: "See Dr. Srinivasacholan", title: "Fracture or injury", text: "Fractures in adults and children, ligament tears and sports injuries. Treatment may be a cast, keyhole surgery or fixation, followed by rehab at the clinic." },
    shoulder: { dept: "Physiotherapy", who: "See Dr. Srinivasacholan, then physiotherapy", title: "Stiff or painful shoulder", text: "A frozen shoulder usually recovers without an operation. Expect medicines, an injection if needed and a guided stretching plan." },
    acne:     { dept: "Skin & hair", who: "See Dr. Rekha Cholan", title: "Acne or acne scars", text: "Active acne is calmed first. Scars are then treated with peels, microneedling or laser, chosen for your skin type." },
    hair:     { dept: "Skin & hair", who: "See Dr. Rekha Cholan", title: "Hair fall", text: "She'll look for the cause first: stress, thyroid, low iron, hormones or genes. PRP therapy can help suitable patients." },
    pigment:  { dept: "Skin & hair", who: "See Dr. Rekha Cholan", title: "Dark spots & pigmentation", text: "Melasma, tanning and dark patches are treated with prescription creams, chemical peels and sun care that suits Indian skin." },
    bones:    { dept: "Bone density camp", who: "Free bone density camp", title: "Weak bones after 50", text: "Bone thinning causes no pain until something breaks. A quick, painless scan shows your fracture risk so you can start treatment early." }
  },

  /* Real patient reviews from the clinic's website (lightly edited for spelling). */
  reviews: [
    { name: "Nandhinee Venu", doc: "Orthopaedics", text: "My mother had severe shoulder pain and other doctors suggested an operation. Dr. Srinivasacholan examined her and treated it successfully without surgery. Thank you, doctor." },
    { name: "Priya Soni", doc: "Dermatology", text: "Dr. Rekha Cholan is the best. Her treatment really works, and she's pleasant and attentive to every concern. My skin and hair problems were resolved in a few sessions. The clinic is tidy and hygienic, and the staff are caring. She's great with kids too." },
    { name: "Lakshmi Muralidharan", doc: "Orthopaedics", text: "Excellent service. He explains things kindly and is very experienced in surgery. I have severe obesity, but he performed my hip replacement — and now I feel better." },
    { name: "Senthil Kumar", doc: "Dermatology", text: "One of the kindest, friendliest skin doctors in our area. Dr. Rekha Cholan listens patiently, explains the root cause and the treatment in detail — which gives us real confidence." },
    { name: "Vhaaman R", doc: "Orthopaedics", text: "One of the best doctors for ortho. He never over-prescribes or gives unwanted medication. Such a friendly doctor." }
  ]
};

/* Render data-driven bits */
(() => {
  const C = window.CLINIC;
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const track = document.getElementById("reviews-track");
  if (track) {
    track.innerHTML = C.reviews.map(r => {
      const ini = r.name.split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
      return `<figure class="review"><blockquote>“${esc(r.text)}”</blockquote><figcaption><span class="avatar" aria-hidden="true">${ini}</span><span><b>${esc(r.name)}</b><span class="muted">${esc(r.doc)} patient</span></span></figcaption></figure>`;
    }).join("");
  }

  const tbody = document.querySelector("#hours-table tbody");
  if (tbody) {
    tbody.innerHTML = C.hoursTable.map(h => `<tr data-day="${h.day}"><td>${h.label}</td><td>${h.text}</td></tr>`).join("") +
      `<tr class="note"><td colspan="2">${esc(C.hoursNote)}</td></tr>`;
  }

})();
