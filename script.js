const ideas = [
      "Bikin lagu dari suara kipas angin.",
      "Ngoding sambil merem (challenge).",
      "Cari gambar random terus kasih caption kocak.",
      "Buat website palsu yang isinya cuma tombol jebakan.",
      "Pretend jadi alien dan rekam podcast."
    ];

    const facts = [
      "Otak manusia bisa menghasilkan listrik untuk menyalakan bola lampu kecil.",
      "Cacing bisa beregenerasi jadi dua jika dipotong (tergantung spesiesnya).",
      "Kata 'robot' berasal dari kata Slavia yang artinya 'pekerja paksa'.",
      "Air panas bisa membeku lebih cepat dari air dingin, disebut Efek Mpemba.",
      "Gurita punya tiga jantung dan darah berwarna biru.",
      "Keyboard QWERTY awalnya dibuat untuk memperlambat mengetik.",
      "NASA pernah secara tidak sengaja menghapus rekaman asli pendaratan di Bulan.",
      "Burung hantu tidak bisa menggerakkan matanya, jadi kepalanya yang diputar."
    ];

    function generateIdea() {
      const idea = ideas[Math.floor(Math.random() * ideas.length)];
      document.getElementById("random-idea").textContent = idea;
    }

    function generateFact() {
      const fact = facts[Math.floor(Math.random() * facts.length)];
      document.getElementById("fun-fact").textContent = fact;
    }