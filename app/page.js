'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const DATA = {
      Compute: [
        ['Amazon EC2', 'Virtual servers in the cloud where you choose the OS, size, and settings.'],
        ['AWS Lambda', "Runs your code only when it's triggered — no servers to manage. You pay per request and execution time."],
        ['Amazon ECS', 'A service to run and manage containers (like Docker) on AWS. AWS handles scheduling and scaling.'],
        ['Amazon EKS', 'Runs Kubernetes on AWS so you can orchestrate containers. AWS manages the Kubernetes control plane.'],
        ['Amazon Elastic Beanstalk', 'Upload your app and AWS handles deployment, scaling, and monitoring. A simpler way to run web apps.'],
        ['Amazon Lightsail', "Simple 'starter' cloud servers with predictable pricing. Good for small apps and quick setups."],
        ['AWS Batch', 'Runs batch jobs (like large processing tasks) efficiently. It provisions compute and queues jobs automatically.'],
        ['AWS Fargate', 'Runs containers without managing servers. Used with ECS or EKS.']
      ],
      Storage: [
        ['Amazon S3', 'Object storage for files like images, backups, and logs. Highly durable and used for many storage cases.'],
        ['Amazon S3 Glacier', 'Low-cost storage for long-term archiving. Retrieval can take minutes to hours depending on the option.'],
        ['Amazon EBS', 'Block storage volumes for EC2 (like a virtual hard drive). Great for databases and apps needing fast disk access.'],
        ['Amazon EFS', 'Shared file storage that multiple EC2 instances can use at once. Good for shared folders and Linux workloads.'],
        ['Amazon FSx', 'Fully managed file systems like Windows File Server.'],
        ['AWS Storage Gateway', 'Connects your on-premises storage to AWS cloud storage.'],
        ['AWS Backup', 'Automatically backs up AWS resources.']
      ],
      Databases: [
        ['Amazon RDS', 'Managed relational databases like MySQL or PostgreSQL. AWS handles maintenance.'],
        ['Amazon Aurora', 'A faster, cloud-optimized version of MySQL/PostgreSQL built by AWS.'],
        ['Amazon DynamoDB', 'Fast NoSQL database for apps needing low latency.'],
        ['Amazon Redshift', 'Data warehouse for analyzing huge amounts of business data.'],
        ['Amazon ElastiCache', 'Stores frequently used data in memory to make apps faster.'],
        ['Amazon Neptune', 'Graph database for relationships like social networks.'],
        ['Amazon DocumentDB', 'MongoDB-compatible document database.'],
        ['Amazon Keyspaces', 'Managed Apache Cassandra database.']
      ],
      Networking: [
        ['Amazon VPC', 'Your own private network inside AWS.'],
        ['Elastic Load Balancer (ELB)', 'Spreads traffic across multiple servers.'],
        ['Application Load Balancer (ALB)', 'Balances web traffic (HTTP / HTTPS).'],
        ['Network Load Balancer (NLB)', 'Handles very fast TCP/UDP traffic.'],
        ['Gateway Load Balancer', 'Used for network security appliances.'],
        ['Amazon Route 53', "AWS's DNS service that routes users to websites."],
        ['Amazon CloudFront', 'Content Delivery Network (CDN) that makes websites faster worldwide.'],
        ['AWS Direct Connect', 'Dedicated private connection between your company and AWS.'],
        ['AWS VPN', 'Secure internet connection into AWS.'],
        ['Internet Gateway', 'Allows resources inside a VPC to access the internet.'],
        ['NAT Gateway', 'Lets private servers access the internet without being publicly accessible.']
      ],
      'Security & Identity': [
        ['IAM', 'Controls who can access AWS resources and what they can do.'],
        ['IAM Role', 'Temporary permissions assigned to AWS services or users.'],
        ['IAM Policy', 'Rules that define permissions.'],
        ['AWS Organizations', 'Manage multiple AWS accounts together.'],
        ['Amazon Cognito', 'Lets users sign into your applications.'],
        ['AWS Directory Service', 'Managed Microsoft Active Directory.'],
        ['AWS Shield', 'Protects against DDoS attacks.'],
        ['AWS WAF', 'Web Application Firewall that blocks malicious web traffic.'],
        ['AWS Firewall Manager', 'Manages firewall rules across multiple AWS accounts.'],
        ['AWS Secrets Manager', 'Securely stores passwords and API keys.'],
        ['AWS KMS', 'Creates and manages encryption keys.'],
        ['AWS Certificate Manager (ACM)', 'Provides free SSL/TLS certificates.'],
        ['Amazon GuardDuty', 'Detects suspicious activity and security threats.'],
        ['Amazon Inspector', 'Finds security vulnerabilities in EC2 and containers.'],
        ['Amazon Macie', 'Finds sensitive data like personal information in S3.'],
        ['AWS Security Hub', 'Central dashboard for security findings.'],
        ['AWS Artifact', 'Compliance reports and AWS certifications.']
      ],
      Monitoring: [
        ['Amazon CloudWatch', 'Monitors applications, servers, logs, and metrics.'],
        ['AWS CloudTrail', 'Records who did what in your AWS account.'],
        ['AWS Config', 'Tracks configuration changes to AWS resources.'],
        ['AWS Systems Manager', 'Manages and updates servers.'],
        ['AWS Trusted Advisor', 'Gives recommendations to improve cost, security, and performance.'],
        ['AWS Health Dashboard', 'Shows AWS service outages and account-specific issues.'],
        ['AWS Personal Health Dashboard', 'Alerts you if AWS problems affect your resources.']
      ],
      'Developer Tools': [
        ['AWS CloudFormation', 'Creates AWS infrastructure using code.'],
        ['AWS CDK', 'Builds CloudFormation templates using programming languages.'],
        ['AWS CodeCommit', 'Git repository hosted by AWS.'],
        ['AWS CodeBuild', 'Compiles and tests code.'],
        ['AWS CodeDeploy', 'Automatically deploys applications.'],
        ['AWS CodePipeline', 'Automates the software release process (CI/CD).'],
        ['AWS X-Ray', 'Helps debug distributed applications.']
      ],
      Messaging: [
        ['Amazon SQS', 'Queue that stores messages until another application processes them.'],
        ['Amazon SNS', 'Sends notifications to many subscribers at once.'],
        ['Amazon EventBridge', 'Routes events between AWS services and applications.'],
        ['AWS Step Functions', 'Coordinates multiple AWS services into workflows.'],
        ['Amazon MQ', 'Managed message broker for existing enterprise apps.']
      ],
      Analytics: [
        ['Amazon Athena', 'Runs SQL queries directly on files stored in S3.'],
        ['AWS Glue', 'Extracts, transforms, and loads (ETL) data.'],
        ['Amazon EMR', 'Runs big data frameworks like Hadoop and Spark.'],
        ['Amazon Kinesis', 'Processes real-time streaming data.'],
        ['AWS Lake Formation', 'Makes it easier to build data lakes.'],
        ['Amazon QuickSight', 'Creates dashboards and business reports.']
      ],
      'ML & AI': [
        ['Amazon SageMaker', 'Build, train, and deploy machine learning models.'],
        ['Amazon Rekognition', 'Detects objects and faces in images and videos.'],
        ['Amazon Comprehend', 'Understands text using AI.'],
        ['Amazon Lex', 'Builds chatbots with natural language.'],
        ['Amazon Polly', 'Converts text into speech.'],
        ['Amazon Transcribe', 'Converts speech into text.'],
        ['Amazon Translate', 'Translates text between languages.'],
        ['Amazon Bedrock', 'Accesses foundation AI models without managing infrastructure.']
      ],
      Migration: [
        ['AWS Migration Hub', 'Tracks migration progress to AWS.'],
        ['AWS DMS', 'Moves databases into AWS.'],
        ['AWS Snowball', 'Physical device for transferring huge amounts of data.'],
        ['AWS Snowmobile', 'Semi-truck that transfers exabytes of data.'],
        ['AWS DataSync', 'Transfers files between on-premises storage and AWS.']
      ],
      'Cost Management': [
        ['AWS Pricing Calculator', 'Estimates AWS costs before deployment.'],
        ['AWS Cost Explorer', 'Analyzes AWS spending.'],
        ['AWS Budgets', 'Sends alerts when spending reaches limits.'],
        ['AWS Cost and Usage Report (CUR)', 'Detailed billing reports.'],
        ['AWS Marketplace', 'Buy software that runs on AWS.']
      ],
      'Cloud Concepts': [
        ['Availability Zone (AZ)', 'One or more data centers within a region.'],
        ['Region', 'Geographic area containing multiple Availability Zones.'],
        ['Edge Location', 'Location used by CloudFront to deliver content faster.'],
        ['Scalability', 'Increase or decrease resources as needed.'],
        ['Elasticity', 'Automatically scales resources based on demand.'],
        ['High Availability', 'Keeps applications running even if something fails.'],
        ['Fault Tolerance', 'Continues operating despite failures.'],
        ['Disaster Recovery', 'Plan to restore systems after major outages.']
      ],
      'Pricing Models': [
        ['On-Demand', 'Pay only for what you use. No commitment.'],
        ['Reserved Instances', 'Commit to 1–3 years for a lower price.'],
        ['Savings Plans', 'Commit to a certain amount of usage for discounts.'],
        ['Spot Instances', 'Buy unused EC2 capacity very cheaply, but AWS can reclaim it at any time.']
      ]
    };

    const CAT_COLORS = {
      Compute: '#FF9500',
      Storage: '#34C759',
      Databases: '#5E5CE6',
      Networking: '#0A84FF',
      'Security & Identity': '#FF3B30',
      Monitoring: '#30B0C7',
      'Developer Tools': '#AF52DE',
      Messaging: '#FF2D55',
      Analytics: '#BF5AF2',
      'ML & AI': '#5AC8FA',
      Migration: '#A2845E',
      'Cost Management': '#32ADE6',
      'Cloud Concepts': '#FF9F0A',
      'Pricing Models': '#66C266'
    };

    function tint(hex, a) {
      const n = parseInt(hex.slice(1), 16);
      return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
    }

    const ALL = [];
    for (const cat in DATA) {
      DATA[cat].forEach(([t, d]) => ALL.push({ cat, term: t, def: d, key: cat + '::' + t }));
    }

    const cats = ['All', ...Object.keys(DATA)];
    const mastered = new Set();

    let activeCat = 'All';
    let queue = [];
    let flipped = false;
    let busy = false;

    const el = (id) => document.getElementById(id);
    const card = el('card');
    const outer = el('outer');
    const chips = el('chips');

    const poolFor = (c) => (c === 'All' ? ALL.slice() : DATA[c].map(([t, d]) => ({ cat: c, term: t, def: d, key: c + '::' + t })));
    function rebuildQueue() {
      queue = poolFor(activeCat).filter((c) => !mastered.has(c.key));
    }
    rebuildQueue();

    cats.forEach((c) => {
      const b = document.createElement('button');
      b.className = 'chip' + (c === 'All' ? ' active' : '');
      b.textContent = c;
      b.setAttribute('role', 'tab');
      b.onclick = () => selectCat(c, b);
      chips.appendChild(b);
    });

    function selectCat(c, btn) {
      activeCat = c;
      document.querySelectorAll('.chip').forEach((x) => x.classList.remove('active'));
      btn.classList.add('active');
      rebuildQueue();
      setFlip(false);
      render();
    }

    function setFlip(v) {
      flipped = v;
      card.classList.toggle('flipped', v);
      card.setAttribute('aria-label', (v ? 'Definition shown' : 'Term shown') + ', activate to flip');
    }

    function shuffleArr(a) {
      a = a.slice();
      for (let k = a.length - 1; k > 0; k--) {
        const j = Math.random() * (k + 1) | 0;
        [a[k], a[j]] = [a[j], a[k]];
      }
      return a;
    }

    function sample(arr, n) {
      return shuffleArr(arr).slice(0, n);
    }

    let mode = 'flash';
    let quizLocked = false;

    function stats() {
      const pool = poolFor(activeCat);
      const total = pool.length;
      const done = pool.reduce((n, c) => n + (mastered.has(c.key) ? 1 : 0), 0);
      const empty = queue.length === 0;
      el('bar').style.width = (total ? (done / total) * 100 : 0) + '%';
      el('known').textContent = done + ' / ' + total + ' mastered';
      el('remain').textContent = queue.length;
      el('reset').disabled = done === 0;
      el('shuffle').disabled = empty;
      return empty;
    }

    function render() {
      const empty = stats();
      if (mode === 'flash') renderFlash(empty);
      else if (mode === 'quiz') renderQuiz(empty);
      else renderMatch(empty);
    }

    function renderFlash(empty) {
      ['again', 'got', 'flip'].forEach((id) => el(id).disabled = empty);
      if (empty) {
        card.classList.remove('flipped');
        flipped = false;
        el('catF').style.display = 'none';
        el('catB').style.display = 'none';
        el('term').textContent = 'All caught up';
        el('frontHint').textContent = 'Every card mastered — hit Reset to run them again.';
        el('def').textContent = 'Nice work.';
        el('termHint').textContent = '';
        return;
      }
      const c = queue[0];
      el('term').textContent = c.term;
      el('def').textContent = c.def;
      el('termHint').textContent = c.term;
      el('frontHint').textContent = 'Tap to reveal';
      const color = CAT_COLORS[c.cat] || '#8E8E93';
      ['catF', 'catB'].forEach((id) => {
        const p = el(id);
        p.style.display = '';
        p.textContent = c.cat;
        p.style.color = color;
        p.style.background = tint(color, 0.13);
      });
    }

    function renderQuiz(empty) {
      const fb = el('qfeedback');
      fb.className = 'qfeedback';
      fb.textContent = '';
      if (empty) {
        el('qcat').style.display = 'none';
        el('qterm').textContent = 'All caught up';
        el('options').innerHTML = '';
        fb.textContent = 'Every card mastered — hit Reset to run them again.';
        return;
      }
      const c = queue[0];
      const color = CAT_COLORS[c.cat] || '#8E8E93';
      const qc = el('qcat');
      qc.style.display = '';
      qc.textContent = c.cat;
      qc.style.color = color;
      qc.style.background = tint(color, 0.13);
      el('qterm').textContent = c.term;
      buildOptions(c);
    }

    function buildOptions(c) {
      const box = el('options');
      box.innerHTML = '';
      let src = poolFor(activeCat).filter((x) => x.def !== c.def);
      if (src.length < 3) src = ALL.filter((x) => x.def !== c.def);
      const choices = shuffleArr([c.def, ...sample(src, 3).map((x) => x.def)]);
      const letters = ['A', 'B', 'C', 'D'];
      quizLocked = false;
      choices.forEach((def, idx) => {
        const b = document.createElement('button');
        b.className = 'opt';
        b.type = 'button';
        const m = document.createElement('span');
        m.className = 'mark';
        m.textContent = letters[idx];
        const t = document.createElement('span');
        t.className = 'otext';
        t.textContent = def;
        b.append(m, t);
        b.onclick = () => answer(b, def === c.def, c);
        box.appendChild(b);
      });
    }

    function answer(btn, correct, c) {
      if (quizLocked) return;
      quizLocked = true;
      [...el('options').children].forEach((o) => {
        o.disabled = true;
        if (o.querySelector('.otext').textContent === c.def) o.classList.add('correct');
      });
      const fb = el('qfeedback');
      if (correct) {
        fb.textContent = 'Correct — mastered.';
        fb.className = 'qfeedback ok';
      } else {
        btn.classList.add('wrong');
        fb.textContent = 'Not quite — this one goes to the back.';
        fb.className = 'qfeedback bad';
      }
      setTimeout(() => {
        if (correct) {
          mastered.add(c.key);
          queue.shift();
        } else {
          queue.push(queue.shift());
        }
        quizAdvance();
      }, correct ? 800 : 1350);
    }

    function quizAdvance() {
      const q = el('quiz');
      q.classList.add('out');
      setTimeout(() => {
        q.classList.remove('out');
        render();
        q.classList.add('in');
        void q.offsetWidth;
        q.classList.remove('in');
      }, 300);
    }

    const ROUND = 5;
    let drag = null;

    function renderMatch(empty) {
      const defs = el('defs');
      const tray = el('tray');
      defs.innerHTML = '';
      tray.innerHTML = '';
      if (empty) {
        el('matchHint').textContent = 'Every card mastered — hit Reset to run them again.';
        return;
      }
      el('matchHint').textContent = 'Drag each term onto its definition';
      const round = queue.slice(0, Math.min(ROUND, queue.length));

      shuffleArr(round).forEach((c) => {
        const row = document.createElement('div');
        row.className = 'def-row';
        row.dataset.key = c.key;
        const d = document.createElement('span');
        d.className = 'def-text';
        d.textContent = c.def;
        const s = document.createElement('span');
        s.className = 'slot';
        row.append(d, s);
        defs.appendChild(row);
      });

      shuffleArr(round).forEach((c) => {
        const t = document.createElement('button');
        t.className = 'tile';
        t.type = 'button';
        t.dataset.key = c.key;
        t.textContent = c.term;
        t.addEventListener('pointerdown', (e) => tileDown(e, t));
        tray.appendChild(t);
      });
    }

    function rowAt(x, y) {
      let found = null;
      document.querySelectorAll('#defs .def-row').forEach((d) => {
        if (d.classList.contains('matched')) return;
        const r = d.getBoundingClientRect();
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) found = d;
      });
      return found;
    }

    function tileDown(e, tile) {
      if (tile.classList.contains('placeholder')) return;
      e.preventDefault();
      const r = tile.getBoundingClientRect();
      const ghost = tile.cloneNode(true);
      ghost.classList.add('ghost');
      ghost.style.width = r.width + 'px';
      ghost.style.height = r.height + 'px';
      ghost.style.left = r.left + 'px';
      ghost.style.top = r.top + 'px';
      document.body.appendChild(ghost);
      tile.classList.add('placeholder');
      drag = { tile, ghost, key: tile.dataset.key, offX: e.clientX - r.left, offY: e.clientY - r.top };
      window.addEventListener('pointermove', dragMove);
      window.addEventListener('pointerup', dragUp, { once: true });
    }

    function dragMove(e) {
      if (!drag) return;
      drag.ghost.style.left = (e.clientX - drag.offX) + 'px';
      drag.ghost.style.top = (e.clientY - drag.offY) + 'px';
      const row = rowAt(e.clientX, e.clientY);
      document.querySelectorAll('#defs .def-row').forEach((d) => d.classList.toggle('hover', d === row));
    }

    function dragUp(e) {
      if (!drag) return;
      window.removeEventListener('pointermove', dragMove);
      const { tile, ghost, key } = drag;
      const row = rowAt(e.clientX, e.clientY);
      document.querySelectorAll('#defs .def-row').forEach((d) => d.classList.remove('hover'));
      drag = null;

      if (row && row.dataset.key === key) {
        ghost.remove();
        lockMatch(row, tile, key);
      } else {
        if (row) {
          row.classList.add('bad');
          setTimeout(() => row.classList.remove('bad'), 430);
        }
        const r = tile.getBoundingClientRect();
        ghost.style.transition = 'left .24s ease, top .24s ease, transform .24s ease';
        ghost.style.transform = 'scale(1)';
        ghost.style.left = r.left + 'px';
        ghost.style.top = r.top + 'px';
        setTimeout(() => {
          ghost.remove();
          tile.classList.remove('placeholder');
        }, 240);
      }
    }

    function lockMatch(row, tile, key) {
      const slot = row.querySelector('.slot');
      slot.textContent = tile.textContent;
      slot.classList.add('filled');
      row.classList.add('matched');
      tile.remove();
      mastered.add(key);
      queue = queue.filter((c) => c.key !== key);
      stats();

      const done = [...document.querySelectorAll('#defs .def-row')].every((d) => d.classList.contains('matched'));
      if (done) {
        setTimeout(() => {
          const m = el('match');
          m.classList.add('out');
          setTimeout(() => {
            m.classList.remove('out');
            renderMatch(queue.length === 0);
            m.classList.add('in');
            void m.offsetWidth;
            m.classList.remove('in');
          }, 300);
        }, 520);
      }
    }

    function setMode(m) {
      mode = m;
      el('modes').dataset.mode = m;
      document.querySelectorAll('#modes button').forEach((b) => b.classList.toggle('on', b.dataset.mode === m));
      el('outer').hidden = m !== 'flash';
      el('quiz').hidden = m !== 'quiz';
      el('match').hidden = m !== 'match';
      const flashOnly = m === 'flash';
      document.querySelectorAll('.action').forEach((a) => (a.style.display = flashOnly ? '' : 'none'));
      el('flip').style.display = flashOnly ? '' : 'none';
      el('kbdhint').innerHTML = m === 'flash'
        ? '<kbd>Space</kbd> flip · <kbd>&larr;</kbd> again · <kbd>&rarr;</kbd> got it · <kbd>S</kbd> shuffle · <kbd>R</kbd> reset'
        : m === 'quiz'
          ? '<kbd>1</kbd>–<kbd>4</kbd> choose · <kbd>S</kbd> shuffle · <kbd>R</kbd> reset'
          : 'Drag terms onto definitions · <kbd>S</kbd> shuffle · <kbd>R</kbd> reset';
      setFlip(false);
      render();
    }

    function toggleFlip() {
      if (mode === 'flash' && queue.length) setFlip(!flipped);
    }

    function act(dir) {
      if (mode !== 'flash' || busy || queue.length === 0) return;
      busy = true;
      const c = queue[0];
      if (dir === 'right') {
        mastered.add(c.key);
        queue.shift();
      } else {
        queue.push(queue.shift());
      }
      outer.classList.add(dir === 'right' ? 'out-right' : 'out-left');
      setTimeout(() => {
        outer.classList.remove('out-right', 'out-left');
        card.style.transition = 'none';
        setFlip(false);
        void card.offsetWidth;
        card.style.transition = '';
        render();
        outer.classList.add('in');
        void outer.offsetWidth;
        outer.classList.remove('in');
        setTimeout(() => {
          busy = false;
        }, 320);
      }, 300);
    }

    function shuffle() {
      queue = shuffleArr(queue);
      setFlip(false);
      render();
    }

    function reset() {
      mastered.clear();
      rebuildQueue();
      setFlip(false);
      render();
    }

    card.addEventListener('click', () => toggleFlip());
    card.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleFlip();
      }
    });

    el('flip').onclick = toggleFlip;
    el('again').onclick = () => act('left');
    el('got').onclick = () => act('right');
    el('shuffle').onclick = shuffle;
    el('reset').onclick = reset;
    document.querySelectorAll('#modes button').forEach((b) => (b.onclick = () => setMode(b.dataset.mode)));

    document.addEventListener('keydown', (e) => {
      if (e.target.closest('.chip') || e.target.closest('#modes')) return;
      const k = e.key.toLowerCase();
      if (k === 's') {
        shuffle();
        return;
      }
      if (k === 'r') {
        reset();
        return;
      }
      if (mode === 'quiz') {
        if (/^[1-4]$/.test(e.key)) {
          const b = el('options').children[+e.key - 1];
          if (b && !b.disabled) b.click();
        }
        return;
      }
      if (mode !== 'flash') return;
      if (e.key === 'ArrowLeft') {
        act('left');
      } else if (e.key === 'ArrowRight') {
        act('right');
      } else if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        toggleFlip();
      }
    });

    setMode('flash');
  }, []);

  return (
    <main>
      <div className="wrap">
        <header>
          <div className="brand">
            <h1>AWS Flashcards</h1>
            <p>Cloud Practitioner · services &amp; concepts</p>
          </div>
          <div className="known" id="known">0 mastered</div>
        </header>

        <div className="modes" id="modes" data-mode="flash" role="tablist" aria-label="Study mode">
          <span className="thumb" aria-hidden="true"></span>
          <button type="button" data-mode="flash" className="on" role="tab">Flashcards</button>
          <button type="button" data-mode="quiz" role="tab">Quiz</button>
          <button type="button" data-mode="match" role="tab">Match</button>
        </div>

        <div className="chips" id="chips" role="tablist" aria-label="Categories"></div>
        <div className="progress"><i id="bar"></i></div>

        <div className="stage">
          <div className="card-outer" id="outer">
            <div className="card" id="card" role="button" tabIndex="0" aria-label="Flashcard, activate to flip">
              <div className="face front">
                <span className="cat" id="catF"></span>
                <div className="term-wrap"><div className="term" id="term"></div></div>
                <div className="foot"><span className="hint" id="frontHint">Tap to reveal</span></div>
              </div>
              <div className="face back">
                <span className="cat" id="catB"></span>
                <div className="term-wrap"><div className="def" id="def"></div></div>
                <div className="foot"><span className="hint" id="termHint"></span></div>
              </div>
            </div>
          </div>
          <div className="quiz" id="quiz" hidden>
            <div className="qhead"><span className="cat" id="qcat"></span></div>
            <div className="qterm" id="qterm"></div>
            <div className="options" id="options"></div>
            <div className="qfeedback" id="qfeedback"></div>
          </div>
          <div className="match" id="match" hidden>
            <p className="match-hint" id="matchHint">Drag each term onto its definition</p>
            <div className="defs" id="defs"></div>
            <div className="tray" id="tray"></div>
          </div>
        </div>

        <div className="controls">
          <div className="action">
            <button className="nav again" id="again" aria-label="Didn't get it — send to the back">
              <svg viewBox="0 0 24 24"><path d="M9 14l-5-5 5-5" /><path d="M4 9h11a5 5 0 015 5v1" /></svg>
            </button>
            <span className="alabel again">Again</span>
          </div>
          <div className="counter"><b id="remain">0</b> to review</div>
          <div className="action">
            <button className="nav got" id="got" aria-label="Got it — mark as mastered">
              <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
            </button>
            <span className="alabel got">Got it</span>
          </div>
        </div>

        <div className="secondary">
          <button className="pill" id="shuffle">
            <svg viewBox="0 0 24 24"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
            Shuffle
          </button>
          <button className="pill accent" id="flip">
            <svg viewBox="0 0 24 24"><path d="M3 4v6h6M21 20v-6h-6" /><path d="M20 9A9 9 0 006 5.3L3 8M4 15a9 9 0 0014 3.7L21 16" /></svg>
            Flip
          </button>
          <button className="pill" id="reset">
            <svg viewBox="0 0 24 24"><path d="M3 3v6h6" /><path d="M21 12A9 9 0 106 5.3L3 8" /></svg>
            Reset
          </button>
        </div>

        <div className="kbd" id="kbdhint"></div>
      </div>

      <style jsx global>{`
        :root {
          --bg: #F5F5F7;
          --surface: #FFFFFF;
          --ink: #1D1D1F;
          --ink-2: #6E6E73;
          --ink-3: #AEAEB2;
          --accent: #FF9500;
          --accent-press: #E6820B;
          --green: #34C759;
          --hair: rgba(0,0,0,0.08);
          --shadow: 0 1px 2px rgba(0,0,0,.04), 0 12px 30px rgba(0,0,0,.08), 0 30px 60px rgba(0,0,0,.06);
          --radius: 26px;
          --font: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue",Helvetica,Arial,sans-serif;
        }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        html, body { height: 100%; margin: 0; overflow-x: hidden; }
        body {
          font-family: var(--font);
          color: var(--ink);
          background: radial-gradient(1200px 600px at 50% -10%, #FFFFFF 0%, rgba(255,255,255,0) 60%), var(--bg);
          display: flex;
          flex-direction: column;
          align-items: stretch;
          min-height: 100dvh;
          padding: 24px 20px 40px;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        [hidden] { display: none !important; }
        .wrap { width: 100%; max-width: 560px; min-width: 0; margin: 0 auto; display: flex; flex-direction: column; flex: 1; }
        header { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
        .brand { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .brand h1 { margin: 0; font-size: clamp(20px,6vw,26px); font-weight: 700; letter-spacing: -.02em; }
        .brand p { margin: 0; font-size: 13px; color: var(--ink-2); letter-spacing: -.01em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .known { flex: 0 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; font-size: 13px; font-weight: 590; color: var(--ink-2); background: rgba(52,199,89,.12); color: #248A3D; padding: 6px 12px; border-radius: 100px; white-space: nowrap; letter-spacing: -.01em; transition: background .3s ease; }
        .chips { display: flex; gap: 8px; overflow-x: auto; min-width: 0; padding: 4px 2px 12px; margin: 0 -2px 4px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .chips::-webkit-scrollbar { display: none; }
        .chip { flex: 0 0 auto; border: none; cursor: pointer; font-family: inherit; font-size: 13px; font-weight: 560; letter-spacing: -.01em; padding: 8px 15px; border-radius: 100px; background: var(--surface); color: var(--ink-2); box-shadow: 0 1px 1px rgba(0,0,0,.03), 0 0 0 .5px var(--hair) inset; transition: transform .18s cubic-bezier(.3,1.4,.5,1), background .2s, color .2s, box-shadow .2s; white-space: nowrap; }
        .chip:hover { color: var(--ink); }
        .chip:active { transform: scale(.94); }
        .chip.active { background: var(--ink); color: #fff; box-shadow: 0 4px 12px rgba(0,0,0,.18); }
        .progress { height: 4px; border-radius: 100px; background: rgba(0,0,0,.06); overflow: hidden; margin: 6px 2px 22px; }
        .progress i { display: block; height: 100%; width: 0; border-radius: 100px; background: var(--accent); transition: width .4s cubic-bezier(.3,1,.4,1); }
        .stage { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 300px; }
        .card-outer { position: relative; width: 100%; aspect-ratio: 1.42/1; max-height: 340px; perspective: 1600px; transition: transform .32s cubic-bezier(.4,0,.2,1), opacity .32s ease; will-change: transform, opacity; }
        .card-outer.out-right { transform: translateX(118%) rotate(9deg); opacity: 0; }
        .card-outer.out-left { transform: translateX(-118%) rotate(-9deg); opacity: 0; }
        .card-outer.in { transform: translateY(16px) scale(.965); opacity: 0; transition: none; }
        .card { position: absolute; inset: 0; transform-style: preserve-3d; cursor: pointer; transition: transform .58s cubic-bezier(.2,.85,.3,1.05); will-change: transform; }
        .card.flipped { transform: rotateY(180deg); }
        .face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; background: var(--surface); border-radius: var(--radius); box-shadow: var(--shadow); display: flex; flex-direction: column; padding: 30px 32px; border: .5px solid rgba(0,0,0,.04); }
        .face.back { transform: rotateY(180deg); }
        .cat { align-self: flex-start; font-size: 11px; font-weight: 640; letter-spacing: .04em; text-transform: uppercase; padding: 6px 11px; border-radius: 100px; }
        .term-wrap { flex: 1; display: flex; align-items: center; justify-content: center; text-align: center; padding: 6px 0; }
        .term { font-size: clamp(26px,6.4vw,38px); font-weight: 680; letter-spacing: -.03em; line-height: 1.06; }
        .def { font-size: clamp(16px,4vw,19px); font-weight: 420; line-height: 1.42; letter-spacing: -.01em; color: var(--ink); text-align: center; }
        .foot { display: flex; align-items: center; justify-content: space-between; height: 20px; }
        .hint { font-size: 12px; color: var(--ink-3); font-weight: 500; letter-spacing: -.01em; }
        .modes { position: relative; display: flex; width: 100%; max-width: 340px; margin: 0 auto 20px; padding: 3px; background: rgba(118,118,128,.12); border-radius: 12px; }
        .modes .thumb { position: absolute; top: 3px; left: 3px; width: calc((100% - 6px)/3); height: calc(100% - 6px); background: var(--surface); border-radius: 9px; box-shadow: 0 1px 3px rgba(0,0,0,.14), 0 0 0 .5px rgba(0,0,0,.04); transition: transform .3s cubic-bezier(.3,1.1,.3,1); }
        .modes[data-mode="quiz"] .thumb { transform: translateX(100%); }
        .modes[data-mode="match"] .thumb { transform: translateX(200%); }
        .modes button { position: relative; z-index: 2; flex: 1; border: none; background: transparent; cursor: pointer; font-family: inherit; font-size: 13.5px; font-weight: 600; letter-spacing: -.015em; color: var(--ink-2); padding: 8px 0; border-radius: 9px; transition: color .25s; white-space: nowrap; }
        .modes button.on { color: var(--ink); }
        .quiz { width: 100%; display: flex; flex-direction: column; align-items: stretch; transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .3s; }
        .quiz.out { opacity: 0; transform: translateY(-10px); }
        .quiz.in { opacity: 0; transform: translateY(12px); transition: none; }
        .qhead { display: flex; justify-content: center; margin-bottom: 12px; }
        .qterm { font-size: clamp(23px,5.6vw,32px); font-weight: 680; letter-spacing: -.03em; line-height: 1.12; text-align: center; margin: 2px 0 22px; padding: 0 6px; }
        .options { display: flex; flex-direction: column; gap: 10px; }
        .opt { display: flex; align-items: flex-start; gap: 13px; text-align: left; width: 100%; font-family: inherit; font-size: 15.5px; line-height: 1.4; font-weight: 450; letter-spacing: -.01em; color: var(--ink); background: var(--surface); border: none; cursor: pointer; padding: 15px 16px; border-radius: 16px; box-shadow: 0 1px 2px rgba(0,0,0,.04), 0 0 0 .5px var(--hair) inset; transition: transform .14s cubic-bezier(.3,1.3,.5,1), box-shadow .2s, background .2s; }
        .opt:hover { box-shadow: 0 2px 8px rgba(0,0,0,.07), 0 0 0 .5px var(--hair) inset; }
        .opt:active { transform: scale(.99); }
        .opt:disabled { cursor: default; }
        .opt .mark { flex: 0 0 auto; width: 24px; height: 24px; border-radius: 7px; display: grid; place-items: center; font-size: 12.5px; font-weight: 700; color: var(--ink-2); background: rgba(0,0,0,.05); margin-top: -1px; transition: .2s; }
        .opt .otext { flex: 1; }
        .opt.correct { background: rgba(52,199,89,.12); box-shadow: 0 0 0 1.5px rgba(52,199,89,.5) inset; }
        .opt.correct .mark { background: var(--green); color: #fff; }
        .opt.wrong { background: rgba(255,59,48,.10); box-shadow: 0 0 0 1.5px rgba(255,59,48,.45) inset; }
        .opt.wrong .mark { background: #FF3B30; color: #fff; }
        .qfeedback { min-height: 20px; text-align: center; margin-top: 16px; font-size: 13.5px; font-weight: 600; letter-spacing: -.01em; color: transparent; transition: color .2s; }
        .qfeedback.ok { color: #248A3D; }
        .qfeedback.bad { color: #C7362B; }
        .match { width: 100%; display: flex; flex-direction: column; gap: 16px; user-select: none; -webkit-user-select: none; transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .3s; }
        .match.out { opacity: 0; transform: translateY(-10px); }
        .match.in { opacity: 0; transform: translateY(12px); transition: none; }
        .match-hint { text-align: center; color: var(--ink-2); font-size: 13px; font-weight: 590; letter-spacing: -.01em; margin: 0; }
        .defs { display: flex; flex-direction: column; gap: 10px; }
        .def-row { display: flex; align-items: center; gap: 12px; background: var(--surface); border-radius: 16px; padding: 13px 13px 13px 16px; min-height: 62px; box-shadow: 0 1px 2px rgba(0,0,0,.04), 0 0 0 .5px var(--hair) inset; transition: box-shadow .2s, background .2s; }
        .def-text { flex: 1; font-size: 14.5px; line-height: 1.36; letter-spacing: -.01em; color: var(--ink); }
        .slot { flex: 0 0 auto; min-width: 98px; max-width: 150px; min-height: 42px; padding: 6px 10px; border-radius: 12px; border: 1.6px dashed rgba(0,0,0,.15); display: grid; place-items: center; text-align: center; font-size: 12.5px; line-height: 1.2; color: var(--ink-3); transition: border-color .2s, background .2s, color .2s; }
        .def-row.hover .slot { border-color: var(--accent); background: rgba(255,149,0,.08); color: var(--accent); }
        .def-row.matched { background: rgba(52,199,89,.09); box-shadow: 0 0 0 1.5px rgba(52,199,89,.4) inset; }
        .slot.filled { border: none; background: var(--green); color: #fff; font-weight: 650; }
        .def-row.bad { animation: shakeRow .42s cubic-bezier(.36,.07,.19,.97); }
        @keyframes shakeRow { 10%,90% { transform: translateX(-2px) } 20%,80% { transform: translateX(4px) } 30%,50%,70% { transform: translateX(-7px) } 40%,60% { transform: translateX(7px) } }
        .tray { display: flex; flex-wrap: wrap; gap: 9px; justify-content: center; min-height: 46px; padding-top: 14px; border-top: 1px solid var(--hair); }
        .tile { max-width: 180px; font-family: inherit; font-size: 14px; font-weight: 590; letter-spacing: -.01em; line-height: 1.2; text-align: center; color: var(--ink); background: var(--surface); border: none; cursor: grab; touch-action: none; padding: 11px 15px; border-radius: 100px; box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 0 0 .5px var(--hair) inset; transition: transform .14s cubic-bezier(.3,1.3,.5,1), box-shadow .2s, opacity .2s; }
        .tile:hover { box-shadow: 0 3px 10px rgba(0,0,0,.09), 0 0 0 .5px var(--hair) inset; }
        .tile.placeholder { opacity: .28; box-shadow: 0 0 0 1.5px var(--hair) inset; background: transparent; }
        .tile.ghost { position: fixed; z-index: 999; cursor: grabbing; pointer-events: none; margin: 0; box-shadow: 0 8px 24px rgba(0,0,0,.18), 0 2px 6px rgba(0,0,0,.1); transform: scale(1.04); }
        .action { display: flex; flex-direction: column; align-items: center; gap: 9px; }
        .alabel { font-size: 12.5px; font-weight: 600; letter-spacing: -.01em; color: var(--ink-2); }
        .alabel.again { color: var(--accent); }
        .alabel.got { color: #248A3D; }
        .nav.again svg { stroke: var(--accent); }
        .nav.got svg { stroke: var(--green); }
        .nav:disabled, .pill:disabled { opacity: .34; pointer-events: none; }
        .controls { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 26px; }
        .nav { width: 56px; height: 56px; border-radius: 50%; border: none; cursor: pointer; background: var(--surface); box-shadow: var(--shadow); display: grid; place-items: center; transition: transform .16s cubic-bezier(.3,1.4,.5,1), box-shadow .2s; }
        .nav:hover { box-shadow: 0 2px 6px rgba(0,0,0,.06), 0 14px 34px rgba(0,0,0,.12); }
        .nav:active { transform: scale(.9); }
        .nav svg { width: 22px; height: 22px; stroke: var(--ink); stroke-width: 2.4; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .counter { min-width: 96px; text-align: center; font-variant-numeric: tabular-nums; font-size: 15px; font-weight: 600; color: var(--ink-2); letter-spacing: .01em; }
        .counter b { color: var(--ink); font-weight: 680; }
        .secondary { display: flex; justify-content: center; gap: 10px; margin-top: 18px; }
        .pill { border: none; cursor: pointer; font-family: inherit; font-size: 14px; font-weight: 560; letter-spacing: -.01em; padding: 11px 18px; border-radius: 100px; background: var(--surface); color: var(--ink); box-shadow: 0 1px 1px rgba(0,0,0,.03), 0 0 0 .5px var(--hair) inset; display: inline-flex; align-items: center; gap: 7px; transition: transform .16s cubic-bezier(.3,1.4,.5,1), background .2s; }
        .pill:active { transform: scale(.95); }
        .pill svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .pill.accent { background: var(--accent); color: #fff; box-shadow: 0 4px 14px rgba(255,149,0,.35); }
        .pill.accent:active { background: var(--accent-press); }
        .kbd { margin-top: 22px; text-align: center; font-size: 11.5px; color: var(--ink-3); letter-spacing: -.01em; line-height: 1.7; }
        .kbd kbd { font-family: var(--font); background: rgba(0,0,0,.05); border-radius: 5px; padding: 1.5px 6px; font-size: 11px; font-weight: 600; color: var(--ink-2); margin: 0 1px; }
        :focus-visible { outline: 2.5px solid var(--accent); outline-offset: 3px; border-radius: 14px; }
        @media (max-width: 400px) { .face { padding: 24px 22px; } .nav { width: 52px; height: 52px; } }
        @media (prefers-reduced-motion: reduce) { * { transition-duration: .001ms !important; animation-duration: .001ms !important; } .card { transition: none; } }
      `}</style>
    </main>
  );
}
