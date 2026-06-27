# Document: http://nginx.org/en/CHANGES-0.5


Changes with nginx 0.5.38                                        14 Sep 2009

    *) Security: a segmentation fault might occur in worker process while 
       specially crafted request handling.
       Thanks to Chris Ries.

    *) Bugfix: a segmentation fault might occur in worker process, if 
       error_log was set to info or debug level.
       Thanks to Sergey Bochenkov.

Changes with nginx 0.5.37                                        07 Jul 2008

    *) Bugfix: if sub_filter and SSI were used together, then responses 
       might were transferred incorrectly.

    *) Bugfix: large SSI inclusions might be truncated.

    *) Bugfix: worker processes might not catch reconfiguration and log 
       rotation signals.

    *) Bugfix: nginx could not be built on latest Fedora 9 Linux.
       Thanks to Roxis.

    *) Bugfix: a segmentation fault might occur in worker process on Linux, 
       if keepalive was enabled.

    *) Bugfix: an alert "sendmsg() failed (9: Bad file descriptor)" on some 
       64-bit platforms while reconfiguration.

Changes with nginx 0.5.36                                        04 May 2008

    *) Bugfix: the "sub_filter" directive might set text to change into 
       output.

    *) Bugfix: a segmentation fault occurred in worker process, if empty 
       stub block was used second time in SSI.

    *) Bugfix: the "proxy_store" and "fastcgi_store" directives did not 
       check a response length.

    *) Bugfix: nginx issued the bogus error message "SSL_shutdown() failed 
       (SSL: )"; the bug had appeared in 0.5.35.

    *) Bugfix: in HTTPS mode requests might fail with the "bad write retry" 
       error; the bug had appeared in 0.5.35.

    *) Bugfix: the "fastcgi_catch_stderr" directive did return error code; 
       now it returns 502 code, that can be rerouted to a next server using 
       the "fastcgi_next_upstream invalid_header" directive.

    *) Bugfix: a segmentation fault occurred in master process if the 
       "fastcgi_catch_stderr" directive was used; the bug had appeared in 
       0.5.32.
       Thanks to Manlio Perillo.

Changes with nginx 0.5.35                                        08 Jan 2008

    *) Change: now the ngx_http_userid_module adds start time microseconds 
       to the cookie field contains a pid value.

    *) Change: now the uname(2) is used on Linux instead of procfs.
       Thanks to Ilya Novikov.

    *) Feature: the "If-Range" request header line support.
       Thanks to Alexander V. Inyukhin.

    *) Bugfix: in HTTPS mode requests might fail with the "bad write retry" 
       error; the bug had appeared in 0.5.13.

    *) Bugfix: the STARTTLS in SMTP mode did not work.
       Thanks to Oleg Motienko.

    *) Bugfix: large_client_header_buffers did not freed before going to 
       keep-alive state.
       Thanks to Olexander Shtepa.

    *) Bugfix: the "limit_rate" directive did not allow to use full 
       throughput, even if limit value was very high.

    *) Bugfix: the $status variable was equal to 0 if a proxied server 
       returned response in HTTP/0.9 version.

    *) Bugfix: if the "?" character was in a "error_page" directive, then 
       it was escaped in a proxied request; the bug had appeared in 0.5.32.

Changes with nginx 0.5.34                                        13 Dec 2007

    *) Change: now the full request line instead of URI only is written to 
       error_log.

    *) Feature: Cygwin compatibility.
       Thanks to Vladimir Kutakov.

    *) Feature: the "merge_slashes" directive.

    *) Feature: the "gzip_vary" directive.

    *) Feature: the "server_tokens" directive.

    *) Feature: the "access_log" directive may be used inside the 
       "limit_except" block.

    *) Bugfix: if the $server_protocol was used in FastCGI parameters and a 
       request line length was near to the "client_header_buffer_size" 
       directive value, then nginx issued an alert "fastcgi: the request 
       record is too big".

    *) Bugfix: if a plain text HTTP/0.9 version request was made to HTTPS 
       server, then nginx returned usual response.

    *) Bugfix: URL double escaping in a redirect of the "msie_refresh" 
       directive; the bug had appeared in 0.5.28.

    *) Bugfix: a segmentation fault might occur in worker process if 
       subrequests were used.

    *) Bugfix: the big responses may be transferred truncated if SSL and 
       gzip were used.

    *) Bugfix: compatibility with mget.

    *) Bugfix: nginx did not unescape URI in the "include" SSI command.

    *) Bugfix: the segmentation fault was occurred on start or while 
       reconfiguration if variable was used in the "charset" or 
       "source_charset" directives.

    *) Bugfix: nginx returned the 400 response on requests like 
       "GET http://www.domain.com HTTP/1.0".
       Thanks to James Oakley.

    *) Bugfix: a segmentation fault occurred in worker process if 
       $date_local and $date_gmt were used outside the 
       ngx_http_ssi_filter_module.

    *) Bugfix: a segmentation fault might occur in worker process if debug 
       log was enabled.
       Thanks to Andrei Nigmatulin.

    *) Bugfix: ngx_http_memcached_module did not set 
       $upstream_response_time.
       Thanks to Maxim Dounin.

    *) Bugfix: a worker process may got caught in an endless loop, if the 
       memcached was used.

Changes with nginx 0.5.33                                        07 Nov 2007

    *) Change: now by default the "echo" SSI command uses entity encoding.

    *) Feature: the "encoding" parameter in the "echo" SSI command.

    *) Change: mail proxy was split on three modules: pop3, imap and smtp.

    *) Feature: the --without-mail_pop3_module, --without-mail_imap_module, 
       and --without-mail_smtp_module configuration parameters.

    *) Feature: the "smtp_greeting_delay" and "smtp_client_buffer" 
       directives of the ngx_mail_smtp_module.

    *) Feature: the "server_name" and "valid_referers" directives support 
       regular expressions.

    *) Feature: the "server_name", "map", and "valid_referers" directives 
       support the "www.example.*" wildcards.

    *) Bugfix: sub_filter did not work with empty substitution.

    *) Bugfix: in sub_filter parsing.

    *) Bugfix: a worker process may got caught in an endless loop, if the 
       memcached was used.

    *) Bugfix: nginx supported low case only "close" and "keep-alive" 
       values in the "Connection" request header line; the bug had appeared 
       in 0.5.32.

    *) Bugfix: nginx could not start on Solaris if the shared PCRE library 
       located in non-standard place was used.

Changes with nginx 0.5.32                                        24 Sep 2007

    *) Change: now nginx tries to set the "worker_priority", 
       "worker_rlimit_nofile", "worker_rlimit_core", and 
       "worker_rlimit_sigpending" without super-user privileges.

    *) Change: now nginx escapes space and "%" in request to a mail proxy 
       authentication server.

    *) Change: now nginx escapes "%" in $memcached_key variable.

    *) Change: the special make target "upgrade1" was defined for online 
       upgrade of 0.1.x versions.

    *) Feature: the "add_header Last-Modified ..." directive changes the 
       "Last-Modified" response header line.

    *) Feature: the mail proxy supports AUTHENTICATE in IMAP mode.
       Thanks to Maxim Dounin.

    *) Feature: the mail proxy supports STARTTLS in SMTP mode.
       Thanks to Maxim Dounin.

    *) Bugfix: nginx did not close directory file on HEAD request if 
       autoindex was used.
       Thanks to Arkadiusz Patyk.

    *) Bugfix: the "proxy_hide_header" and "fastcgi_hide_header" directives 
       did not hide response header lines whose name was longer than 32 
       characters.
       Thanks to Manlio Perillo.

    *) Bugfix: active connection counter always increased if mail proxy was 
       used.

    *) Bugfix: if backend returned response header only using non-buffered 
       proxy, then nginx closed backend connection on timeout.

    *) Bugfix: nginx did not support several "Connection" request header 
       lines.

    *) Bugfix: a charset set by the "charset" directive was not appended to 
       the "Content-Type" header set by $r->send_http_header().

    *) Bugfix: a segmentation fault might occur in worker process if 
       /dev/poll method was used.

    *) Bugfix: nginx did not work on FreeBSD/sparc64.

    *) Bugfix: a segmentation fault occurred in worker process if invalid 
       address was set in the "auth_http" directive.

    *) Bugfix: now nginx uses default listen backlog value 511 on all 
       platforms except FreeBSD.
       Thanks to Jiang Hong.

    *) Bugfix: now Solaris sendfilev() is not used to transfer the client 
       request body to FastCGI-server via the unix domain socket.

    *) Bugfix: if the same host without specified port was used as backend 
       for HTTP and HTTPS, then nginx used only one port - 80 or 443.

    *) Bugfix: the "proxy_ignore_client_abort" and 
       "fastcgi_ignore_client_abort" directives did not work; the bug had 
       appeared in 0.5.13.

Changes with nginx 0.5.31                                        15 Aug 2007

    *) Feature: named locations.

    *) Feature: the "proxy_store" and "fastcgi_store" directives.

    *) Feature: the "proxy_store_access" and "fastcgi_store_access" 
       directives.

Changes with nginx 0.5.30                                        30 Jul 2007

    *) Feature: the $args variable can be set with the "set" directive.

    *) Feature: the $is_args variable.

    *) Bugfix: if a client has closed connection to mail proxy then nginx 
       might not close connection to backend.

    *) Bugfix: now nginx escapes space in $memcached_key variable.

    *) Bugfix: a segmentation fault might occur in worker process when the 
       HTTPS protocol was used in the "proxy_pass" directive.

    *) Bugfix: the perl $$ variable value in ngx_http_perl_module was equal 
       to the master process identification number.

    *) Bugfix: fix building on Solaris/amd64 by Sun Studio 11 and early 
       versions; the bug had appeared in 0.5.29.

Changes with nginx 0.5.29                                        23 Jul 2007

    *) Feature: $nginx_version variable.
       Thanks to Nick S. Grechukh.

    *) Bugfix: if the FastCGI header was split in records, then nginx 
       passed garbage in the header to a client.

    *) Bugfix: Sun Studio compatibility on Solaris/amd64 and 
       Solaris/sparc64.
       Thanks to Jiang Hong and Andrei Nigmatulin.

    *) Bugfix: of minor potential bugs.
       Thanks to Coverity's Scan.

Changes with nginx 0.5.28                                        17 Jul 2007

    *) Security: the "msie_refresh" directive allowed XSS.
       Thanks to Maxim Boguk.

    *) Bugfix: a segmentation fault might occur in worker process if the 
       "auth_http_header" directive was used.
       Thanks to Maxim Dounin.

    *) Bugfix: a segmentation fault occurred in worker process if the 
       CRAM-MD5 authentication method was used, but it was not enabled.

    *) Bugfix: a segmentation fault might occur in worker process if the 
       eventport method was used.

Changes with nginx 0.5.27                                        09 Jul 2007

    *) Bugfix: if remote SSI subrequest was used, then posterior local file 
       subrequest might transferred to client in wrong order.

    *) Bugfix: large SSI inclusions buffered in temporary files were 
       truncated.

Changes with nginx 0.5.26                                        17 Jun 2007

    *) Bugfix: in SSI parsing.

Changes with nginx 0.5.25                                        11 Jun 2007

    *) Bugfix: nginx could not be built with the 
       --without-http_rewrite_module parameter; the bug had appeared in 
       0.5.24.

Changes with nginx 0.5.24                                        06 Jun 2007

    *) Security: the "ssl_verify_client" directive did not work if request 
       was made using HTTP/0.9.

    *) Bugfix: a part of response body might be passed uncompressed if gzip 
       was used; the bug had appeared in 0.5.23.

Changes with nginx 0.5.23                                        04 Jun 2007

    *) Feature: the ngx_http_ssl_module supports Server Name Indication TLS 
       extension.

    *) Feature: the "fastcgi_catch_stderr" directive.
       Thanks to Nick S. Grechukh, OWOX project.

    *) Bugfix: a segmentation fault occurred in master process if two 
       virtual servers should bind() to the overlapping ports.

    *) Bugfix: if nginx was built with ngx_http_perl_module and perl 
       supported threads, then during second reconfiguration the error 
       messages "panic: MUTEX_LOCK" and "perl_parse() failed" were issued.

    *) Bugfix: in the HTTPS protocol in the "proxy_pass" directive.

Changes with nginx 0.5.22                                        29 May 2007

    *) Bugfix: a big request body might not be passed to backend; the bug 
       had appeared in 0.5.21.

Changes with nginx 0.5.21                                        28 May 2007

    *) Bugfix: if server has more than about ten locations, then regex 
       locations might be choosen not in that order as they were specified.

    *) Bugfix: a worker process may got caught in an endless loop on 64-bit 
       platform, if the 33-rd or next in succession backend has failed.
       Thanks to Anton Povarov.

    *) Bugfix: a bus error might occur on Solaris/sparc64 if the PCRE 
       library was used.
       Thanks to Andrei Nigmatulin.

    *) Bugfix: in the HTTPS protocol in the "proxy_pass" directive.

Changes with nginx 0.5.20                                        07 May 2007

    *) Feature: the "sendfile_max_chunk" directive.

    *) Feature: the "$http_...", "$sent_http_...", and "$upstream_http_..." 
       variables may be changed using the "set" directive.

    *) Bugfix: a segmentation fault might occur in worker process if the 
       SSI command 'if expr="$var = /"' was used.

    *) Bugfix: trailing boundary of multipart range response was 
       transferred incorrectly.
       Thanks to Evan Miller.

    *) Bugfix: nginx did not work on Solaris/sparc64 if it was built by Sun 
       Studio.
       Thanks to Andrei Nigmatulin.

    *) Bugfix: the ngx_http_perl_module could not be built by Solaris 
       make.
       Thanks to Andrei Nigmatulin.

Changes with nginx 0.5.19                                        24 Apr 2007

    *) Change: now the $request_time variable has millisecond precision.

    *) Change: the method $r->rflush of ngx_http_perl_module was renamed to 
       the $r->flush.

    *) Feature: the $upstream_addr variable.

    *) Feature: the "proxy_headers_hash_max_size" and 
       "proxy_headers_hash_bucket_size" directives.
       Thanks to Volodymyr Kostyrko.

    *) Bugfix: the files more than 2G could not be transferred using 
       sendfile and limit_rate on 64-bit platforms.

    *) Bugfix: the files more than 2G could not be transferred using 
       sendfile on 64-bit Linux.

Changes with nginx 0.5.18                                        19 Apr 2007

    *) Feature: the ngx_http_sub_filter_module.

    *) Feature: the "$upstream_http_..." variables.

    *) Feature: now the $upstream_status and $upstream_response_time 
       variables keep data about all upstreams before X-Accel-Redirect.

    *) Bugfix: a segmentation fault occurred in master process after first 
       reconfiguration and receiving any signal if nginx was built with 
       ngx_http_perl_module and perl did not support multiplicity; the bug 
       had appeared in 0.5.9.

    *) Bugfix: if perl did not support multiplicity, then after 
       reconfiguration perl code did not work; the bug had appeared in 
       0.3.38.

Changes with nginx 0.5.17                                        02 Apr 2007

    *) Change: now nginx always returns the 405 status for the TRACE method.

    *) Feature: now nginx supports the "include" directive inside the 
       "types" block.

    *) Bugfix: the $document_root variable usage in the "root" and "alias" 
       directives is disabled: this caused recursive stack overflow.

    *) Bugfix: in the HTTPS protocol in the "proxy_pass" directive.

    *) Bugfix: in some cases non-cachable variables (such as $uri variable) 
       returned old cached value.

Changes with nginx 0.5.16                                        26 Mar 2007

    *) Bugfix: the C-class network was not used as hash key in the 
       "ip_hash" directive.
       Thanks to Pavel Yarkovoy.

    *) Bugfix: a segmentation fault might occur in worker process if a 
       charset was set in the "Content-Type" header line and the line has 
       trailing ";"; the bug had appeared in 0.3.50.

    *) Bugfix: the "[alert] zero size buf" error when FastCGI server was 
       used and a request body written in a temporary file was multiple of 
       32K.

    *) Bugfix: nginx could not be built on Solaris without the --with-debug 
       option; the bug had appeared in 0.5.15.

Changes with nginx 0.5.15                                        19 Mar 2007

    *) Feature: the mail proxy supports authenticated SMTP proxying and the 
       "smtp_auth", "smtp_capablities", and "xclient" directives.
       Thanks to Anton Yuzhaninov and Maxim Dounin.

    *) Feature: now the keep-alive connections are closed just after 
       receiving the reconfiguration signal.

    *) Change: the "imap" and "auth" directives were renamed to the "mail" 
       and "pop3_auth" directives.

    *) Bugfix: a segmentation fault occurred in worker process if the 
       CRAM-MD5 authentication method was used and the APOP method was 
       disabled.

    *) Bugfix: if the "starttls only" directive was used in POP3 protocol, 
       then nginx allowed authentication without switching to the SSL mode.

    *) Bugfix: worker processes did not exit after reconfiguration and did 
       not rotate logs if the eventport method was used.

    *) Bugfix: a worker process may got caught in an endless loop, if the 
       "ip_hash" directive was used.

    *) Bugfix: now nginx does not log some alerts if eventport or /dev/poll 
       methods are used.

Changes with nginx 0.5.14                                        23 Feb 2007

    *) Bugfix: nginx ignored superfluous closing "}" in the end of 
       configuration file.

Changes with nginx 0.5.13                                        19 Feb 2007

    *) Feature: the COPY and MOVE methods.

    *) Bugfix: the ngx_http_realip_module set garbage for requests passed 
       via keep-alive connection.

    *) Bugfix: nginx did not work on big-endian 64-bit Linux.
       Thanks to Andrei Nigmatulin.

    *) Bugfix: now when IMAP/POP3 proxy receives too long command it closes 
       the connection right away, but not after timeout.

    *) Bugfix: if the "epoll" method was used and a client closed a 
       connection prematurely, then nginx closed the connection after a 
       send timeout only.

    *) Bugfix: nginx could not be built on platforms different from i386, 
       amd64, sparc, and ppc; the bug had appeared in 0.5.8.

Changes with nginx 0.5.12                                        12 Feb 2007

    *) Bugfix: nginx could not be built on platforms different from i386, 
       amd64, sparc, and ppc; the bug had appeared in 0.5.8.

    *) Bugfix: a segmentation fault might occur in worker process if the 
       temporary files were used while working with FastCGI server; the bug 
       had appeared in 0.5.8.

    *) Bugfix: a segmentation fault might occur in worker process if the 
       $fastcgi_script_name variable was logged.

    *) Bugfix: ngx_http_perl_module could not be built on Solaris.

Changes with nginx 0.5.11                                        05 Feb 2007

    *) Feature: now configure detects system PCRE library in MacPorts.
       Thanks to Chris McGrath.

    *) Bugfix: the response was incorrect if several ranges were requested; 
       the bug had appeared in 0.5.6.

    *) Bugfix: the "create_full_put_path" directive could not create the 
       intermediate directories if no "dav_access" directive was set.
       Thanks to Evan Miller.

    *) Bugfix: the "0" response code might be logged in the access_log 
       instead of the "400" and "408" error codes.

    *) Bugfix: a segmentation fault might occur in worker process if nginx 
       was built with -O2 optimization.

Changes with nginx 0.5.10                                        26 Jan 2007

    *) Bugfix: while online executable file upgrade the new master process 
       did not inherit the listening sockets; the bug had appeared in 0.5.9.

    *) Bugfix: a segmentation fault might occur in worker process if nginx 
       was built with -O2 optimization; the bug had appeared in 0.5.1.

Changes with nginx 0.5.9                                         25 Jan 2007

    *) Change: now the ngx_http_memcached_module uses the $memcached_key 
       variable value as a key.

    *) Feature: the $memcached_key variable.

    *) Feature: the "clean" parameter in the "client_body_in_file_only" 
       directive.

    *) Feature: the "env" directive.

    *) Feature: the "sendfile" directive is available inside the "if" block.

    *) Feature: now on failure of the writing to access nginx logs a 
       message to error_log, but not more often than once a minute.

    *) Bugfix: the "access_log off" directive did not always turn off the 
       logging.

Changes with nginx 0.5.8                                         19 Jan 2007

    *) Bugfix: a segmentation fault might occur if 
       "client_body_in_file_only on" was used and a request body was small.

    *) Bugfix: a segmentation fault occurred if 
       "client_body_in_file_only on" and "proxy_pass_request_body off" or 
       "fastcgi_pass_request_body off" directives were used, and nginx 
       switched to a next upstream.

    *) Bugfix: if the "proxy_buffering off" directive was used and a client 
       connection was non-active, then the connection was closed after send 
       timeout; the bug had appeared in 0.4.7.

    *) Bugfix: if the "epoll" method was used and a client closed a 
       connection prematurely, then nginx closed the connection after a 
       send timeout only.

    *) Bugfix: the "[alert] zero size buf" error when FastCGI server was 
       used.

    *) Bugfixes in the "limit_zone" directive.

Changes with nginx 0.5.7                                         15 Jan 2007

    *) Feature: the ssl_session_cache storage optimization.

    *) Bugfixes in the "ssl_session_cache" and "limit_zone" directives.

    *) Bugfix: the segmentation fault was occurred on start or while 
       reconfiguration if the "ssl_session_cache" or "limit_zone" 
       directives were used on 64-bit platforms.

    *) Bugfix: a segmentation fault occurred if the "add_before_body" or 
       "add_after_body" directives were used and there was no 
       "Content-Type" header line in response.

    *) Bugfix: the OpenSSL library was always built with the threads 
       support.
       Thanks to Den Ivanov.

    *) Bugfix: the PCRE-6.5+ library and the icc compiler compatibility.

Changes with nginx 0.5.6                                         09 Jan 2007

    *) Change: now the ngx_http_index_module ignores all methods except the 
       GET, HEAD, and POST methods.

    *) Feature: the ngx_http_limit_zone_module.

    *) Feature: the $binary_remote_addr variable.

    *) Feature: the "ssl_session_cache" directives of the 
       ngx_http_ssl_module and ngx_imap_ssl_module.

    *) Feature: the DELETE method supports recursive removal.

    *) Bugfix: the byte-ranges were transferred incorrectly if the 
       $r->sendfile() was used.

Changes with nginx 0.5.5                                         24 Dec 2006

    *) Change: the -v switch does not show compiler information any more.

    *) Feature: the -V switch.

    *) Feature: the "worker_rlimit_core" directive supports size in K, M, 
       and G.

    *) Bugfix: the nginx.pm module now could be installed by an 
       unprivileged user.

    *) Bugfix: a segmentation fault might occur if the $r->request_body or 
       $r->request_body_file methods were used.

    *) Bugfix: the ppc platform specific bugs.

Changes with nginx 0.5.4                                         15 Dec 2006

    *) Feature: the "perl" directive may be used inside the "limit_except" 
       block.

    *) Bugfix: the ngx_http_dav_module required the "Date" request header 
       line for the DELETE method.

    *) Bugfix: if one only parameter was used in the "dav_access" 
       directive, then nginx might report about configuration error.

    *) Bugfix: a segmentation fault might occur if the $host variable was 
       used; the bug had appeared in 0.4.14.

Changes with nginx 0.5.3                                         13 Dec 2006

    *) Feature: the ngx_http_perl_module supports the $r->status, 
       $r->log_error, and $r->sleep methods.

    *) Feature: the $r->variable method supports variables that do not 
       exist in nginx configuration.

    *) Bugfix: the $r->has_request_body method did not work.

Changes with nginx 0.5.2                                         11 Dec 2006

    *) Bugfix: if the "proxy_pass" directive used the name of the 
       "upstream" block, then nginx tried to resolve the name; the bug had 
       appeared in 0.5.1.

Changes with nginx 0.5.1                                         11 Dec 2006

    *) Bugfix: the "post_action" directive might not run after a 
       unsuccessful completion of a request.

    *) Workaround: for Eudora for Mac; the bug had appeared in 0.4.11.
       Thanks to Bron Gondwana.

    *) Bugfix: if the "upstream" name was used in the "fastcgi_pass", then 
       the message "no port in upstream" was issued; the bug had appeared 
       in 0.5.0.

    *) Bugfix: if the "proxy_pass" and "fastcgi_pass" directives used the 
       same servers but different ports, then these directives uses the 
       first described port; the bug had appeared in 0.5.0.

    *) Bugfix: if the "proxy_pass" and "fastcgi_pass" directives used the 
       unix domain sockets, then these directives used first described 
       socket; the bug had appeared in 0.5.0.

    *) Bugfix: ngx_http_auth_basic_module ignored the user if it was in the 
       last line in the password file and there was no the carriage return, 
       the line feed, or the ":" symbol after the password.

    *) Bugfix: the $upstream_response_time variable might be equal to 
       "0.000", although response time was more than 1 millisecond.

Changes with nginx 0.5.0                                         04 Dec 2006

    *) Change: the parameters in the "%name" form in the "log_format" 
       directive are not supported anymore.

    *) Change: the "proxy_upstream_max_fails", 
       "proxy_upstream_fail_timeout", "fastcgi_upstream_max_fails", 
       "fastcgi_upstream_fail_timeout", "memcached_upstream_max_fails", and 
       "memcached_upstream_fail_timeout" directives are not supported 
       anymore.

    *) Feature: the "server" directive in the "upstream" context supports 
       the "max_fails", "fail_timeout", and "down" parameters.

    *) Feature: the "ip_hash" directive inside the "upstream" block.

    *) Feature: the WAIT status in the "Auth-Status" header line of the 
       IMAP/POP3 proxy authentication server response.

    *) Bugfix: nginx could not be built on 64-bit platforms; the bug had 
       appeared in 0.4.14.

Changes with nginx 0.4.14                                        27 Nov 2006

    *) Feature: the "proxy_pass_error_message" directive in IMAP/POP3 proxy.

    *) Feature: now configure detects system PCRE library on FreeBSD, 
       Linux, and NetBSD.

    *) Bugfix: ngx_http_perl_module did not work with perl built with the 
       threads support; the bug had appeared in 0.3.38.

    *) Bugfix: ngx_http_perl_module did not work if perl was called 
       recursively.

    *) Bugfix: nginx ignored a host name in a request line.

    *) Bugfix: a worker process may got caught in an endless loop, if a 
       FastCGI server sent too many data to the stderr.

    *) Bugfix: the $upstream_response_time variable may be negative if the 
       system time was changed backward.

    *) Bugfix: the "Auth-Login-Attempt" parameter was not sent to IMAP/POP3 
       proxy authentication server when POP3 was used.

    *) Bugfix: a segmentation fault might occur if connect to IMAP/POP3 
       proxy authentication server failed.

Changes with nginx 0.4.13                                        15 Nov 2006

    *) Feature: the "proxy_pass" directive may be used inside the 
       "limit_except" block.

    *) Feature: the "limit_except" directive supports all WebDAV methods.

    *) Bugfix: if the "add_before_body" directive was used without the 
       "add_after_body" directive, then a response did not transferred 
       complete.

    *) Bugfix: a large request body did not receive if the epoll method and 
       the deferred accept() were used.

    *) Bugfix: a charset could not be set for ngx_http_autoindex_module 
       responses; the bug had appeared in 0.3.50.

    *) Bugfix: the "[alert] zero size buf" error when FastCGI server was 
       used;

    *) Bugfix: the --group= configuration parameter was ignored.
       Thanks to Thomas Moschny.

    *) Bugfix: the 50th subrequest in SSI response did not work; the bug 
       had appeared in 0.3.50.

Changes with nginx 0.4.12                                        31 Oct 2006

    *) Feature: the ngx_http_perl_module supports the $r->variable method.

    *) Bugfix: if a big static file was included using SSI in a response, 
       then the response may be transferred incomplete.

    *) Bugfix: nginx did not omit the "#fragment" part in URI.

Changes with nginx 0.4.11                                        25 Oct 2006

    *) Feature: the POP3 proxy supports the AUTH LOGIN PLAIN and CRAM-MD5.

    *) Feature: the ngx_http_perl_module supports the $r->allow_ranges 
       method.

    *) Bugfix: if the APOP was enabled in the POP3 proxy, then the 
       USER/PASS commands might not work; the bug had appeared in 0.4.10.

Changes with nginx 0.4.10                                        23 Oct 2006

    *) Feature: the POP3 proxy supports the APOP command.

    *) Bugfix: if the select, poll or /dev/poll methods were used, then 
       while waiting authentication server response the IMAP/POP3 proxy 
       hogged CPU.

    *) Bugfix: a segmentation fault might occur if the $server_addr 
       variable was used in the "map" directive.

    *) Bugfix: the ngx_http_flv_module did not support the byte ranges for 
       full responses; the bug had appeared in 0.4.7.

    *) Bugfix: nginx could not be built on Debian amd64; the bug had 
       appeared in 0.4.9.

Changes with nginx 0.4.9                                         13 Oct 2006

    *) Feature: the "set" parameter in the "include" SSI command.

    *) Feature: the ngx_http_perl_module now tests the nginx.pm module 
       version.

Changes with nginx 0.4.8                                         11 Oct 2006

    *) Bugfix: if an "include" SSI command were before another "include" 
       SSI command with a "wait" parameter, then the "wait" parameter might 
       not work.

    *) Bugfix: the ngx_http_flv_module added the FLV header to the full 
       responses.
       Thanks to Alexey Kovyrin.

Changes with nginx 0.4.7                                         10 Oct 2006

    *) Feature: the ngx_http_flv_module.

    *) Feature: the $request_body_file variable.

    *) Feature: the "charset" and "source_charset" directives support the 
       variables.

    *) Bugfix: if an "include" SSI command were before another "include" 
       SSI command with a "wait" parameter, then the "wait" parameter might 
       not work.

    *) Bugfix: if the "proxy_buffering off" directive was used or while 
       working with memcached the connections might not be closed on 
       timeout.

    *) Bugfix: nginx did not run on 64-bit platforms except amd64, sparc64, 
       and ppc64.

Changes with nginx 0.4.6                                         06 Oct 2006

    *) Bugfix: nginx did not run on 64-bit platforms except amd64, sparc64, 
       and ppc64.

    *) Bugfix: nginx sent the chunked response for HTTP/1.1 request,
       if its length was set by text string in the 
       $r->headers_out("Content-Length", ...) method.

    *) Bugfix: after redirecting error by an "error_page" directive any 
       ngx_http_rewrite_module directive returned this error code; the bug 
       had appeared in 0.4.4.

Changes with nginx 0.4.5                                         02 Oct 2006

    *) Bugfix: nginx could not be built on Linux and Solaris; the bug had 
       appeared in 0.4.4.

Changes with nginx 0.4.4                                         02 Oct 2006

    *) Feature: the $scheme variable.

    *) Feature: the "expires" directive supports the "max" parameter.

    *) Feature: the "include" directive supports the "*" mask.
       Thanks to Jonathan Dance.

    *) Bugfix: the "return" directive always overrode the "error_page" 
       response code redirected by the "error_page" directive.

    *) Bugfix: a segmentation fault occurred if zero-length body was in PUT 
       method.

    *) Bugfix: the redirect was changed incorrectly if the variables were 
       used in the "proxy_redirect" directive.

Changes with nginx 0.4.3                                         26 Sep 2006

    *) Change: now the 499 error could not be redirected using an 
       "error_page" directive.

    *) Feature: the Solaris 10 event ports support.

    *) Feature: the ngx_http_browser_module.

    *) Bugfix: a segmentation fault may occur while redirecting the 400 
       error to the proxied server using a "proxy_pass" directive.

    *) Bugfix: a segmentation fault occurred if an unix domain socket was 
       used in a "proxy_pass" directive; the bug had appeared in 0.3.47.

    *) Bugfix: SSI did work with memcached and nonbuffered responses.

    *) Workaround: of the Sun Studio PAUSE hardware capability bug.

Changes with nginx 0.4.2                                         14 Sep 2006

    *) Bugfix: the O_NOATIME flag support on Linux was canceled; the bug 
       had appeared in 0.4.1.

Changes with nginx 0.4.1                                         14 Sep 2006

    *) Bugfix: the DragonFlyBSD compatibility.
       Thanks to Pavel Nazarov.

    *) Workaround: of bug in 64-bit Linux sendfile(), when file is more 
       than 2G.

    *) Feature: now on Linux nginx uses O_NOATIME flag for static 
       requests.
       Thanks to Yusuf Goolamabbas.

Changes with nginx 0.4.0                                         30 Aug 2006

    *) Change in internal API: the HTTP modules initialization was moved 
       from the init module phase to the HTTP postconfiguration phase.

    *) Change: now the request body is not read beforehand for the 
       ngx_http_perl_module: it's required to start the reading using the 
       $r->has_request_body method.

    *) Feature: the ngx_http_perl_module supports the DECLINED return code.

    *) Feature: the ngx_http_dav_module supports the incoming "Date" header 
       line for the PUT method.

    *) Feature: the "ssi" directive is available inside the "if" block.

    *) Bugfix: a segmentation fault occurred if there was an "index" 
       directive with variables and the first index name was without 
       variables; the bug had appeared in 0.1.29.

Changes with nginx 0.3.61                                        28 Aug 2006

    *) Change: now the "tcp_nodelay" directive is turned on by default.

    *) Feature: the "msie_refresh" directive.

    *) Feature: the "recursive_error_pages" directive.

    *) Bugfix: the "rewrite" directive returned incorrect redirect, if the 
       redirect had the captured escaped symbols from original URI.

Changes with nginx 0.3.60                                        18 Aug 2006

    *) Bugfix: a worker process may got caught in an endless loop while an 
       error redirection; the bug had appeared in 0.3.59.

Changes with nginx 0.3.59                                        16 Aug 2006

    *) Feature: now is possible to do several redirection using the 
       "error_page" directive.

    *) Bugfix: the "dav_access" directive did not support three parameters.

    *) Bugfix: the "error_page" directive did not changes the 
       "Content-Type" header line after the "X-Accel-Redirect" was used; 
       the bug had appeared in 0.3.58.

Changes with nginx 0.3.58                                        14 Aug 2006

    *) Feature: the "error_page" directive supports the variables.

    *) Change: now the procfs interface instead of sysctl is used on Linux.

    *) Change: now the "Content-Type" header line is inherited from first 
       response when the "X-Accel-Redirect" was used.

    *) Bugfix: the "error_page" directive did not redirect the 413 error.

    *) Bugfix: the trailing "?" did not remove old arguments if no new 
       arguments were added to a rewritten URI.

    *) Bugfix: nginx could not run on 64-bit FreeBSD 7.0-CURRENT.

Changes with nginx 0.3.57                                        09 Aug 2006

    *) Feature: the $ssl_client_serial variable.

    *) Bugfix: in the "!-e" operator of the "if" directive.
       Thanks to Andrian Budanstov.

    *) Bugfix: while a client certificate verification nginx did not send 
       to a client the required certificates information.

    *) Bugfix: the $document_root variable did not support the variables in 
       the "root" directive.

Changes with nginx 0.3.56                                        04 Aug 2006

    *) Feature: the "dav_access" directive.

    *) Feature: the "if" directive supports the "-d", "!-d", "-e", "!-e", 
       "-x", and "!-x" operators.

    *) Bugfix: a segmentation fault occurred if a request returned a 
       redirect and some sent to client header lines were logged in the 
       access log.

Changes with nginx 0.3.55                                        28 Jul 2006

    *) Feature: the "stub" parameter in the "include" SSI command.

    *) Feature: the "block" SSI command.

    *) Feature: the unicode2nginx script was added to contrib.

    *) Bugfix: if a "root" was specified by variable only, then the root 
       was relative to a server prefix.

    *) Bugfix: if the request contained "//" or "/./" and escaped symbols 
       after them, then the proxied request was sent unescaped.

    *) Bugfix: the $r->header_in("Cookie") of the ngx_http_perl_module now 
       returns all "Cookie" header lines.

    *) Bugfix: a segmentation fault occurred if 
       "client_body_in_file_only on" was used and nginx switched to a next 
       upstream.

    *) Bugfix: on some condition while reconfiguration character codes 
       inside the "charset_map" may be treated invalid; the bug had 
       appeared in 0.3.50.

Changes with nginx 0.3.54                                        11 Jul 2006

    *) Feature: nginx now logs the subrequest information to the error log.

    *) Feature: the "proxy_next_upstream", "fastcgi_next_upstream", and 
       "memcached_next_upstream" directives support the "off" parameter.

    *) Feature: the "debug_connection" directive supports the CIDR address 
       form.

    *) Bugfix: if a response of proxied server or FastCGI server was 
       converted from UTF-8 or back, then it may be transferred incomplete.

    *) Bugfix: the $upstream_response_time variable had the time of the 
       first request to a backend only.

    *) Bugfix: nginx could not be built on amd64 platform; the bug had 
       appeared in 0.3.53.

Changes with nginx 0.3.53                                        07 Jul 2006

    *) Change: the "add_header" directive adds the string to 204, 301, and 
       302 responses.

    *) Feature: the "server" directive in the "upstream" context supports 
       the "weight" parameter.

    *) Feature: the "server_name" directive supports the "*" wildcard.

    *) Feature: nginx supports the request body size more than 2G.

    *) Bugfix: if a client was successfully authorized using "satisfy_any 
       on", then anyway the message "access forbidden by rule" was written 
       in the log.

    *) Bugfix: the "PUT" method may erroneously not create a file and 
       return the 409 code.

    *) Bugfix: if the IMAP/POP3 backend returned an error, then nginx 
       continued proxying anyway.

Changes with nginx 0.3.52                                        03 Jul 2006

    *) Change: the ngx_http_index_module behavior for the "POST /" requests 
       is reverted to the 0.3.40 version state: the module now does not 
       return the 405 error.

    *) Bugfix: the worker process may got caught in an endless loop if the 
       limit rate was used; the bug had appeared in 0.3.37.

    *) Bugfix: ngx_http_charset_module logged "unknown charset" alert, even 
       if the recoding was not needed; the bug had appeared in 0.3.50.

    *) Bugfix: if a code response of the PUT request was 409, then a 
       temporary file was not removed.

Changes with nginx 0.3.51                                        30 Jun 2006

    *) Bugfix: the "<" symbols might disappeared some conditions in the 
       SSI; the bug had appeared in 0.3.50.

Changes with nginx 0.3.50                                        28 Jun 2006

    *) Change: the "proxy_redirect_errors" and "fastcgi_redirect_errors" 
       directives was renamed to the "proxy_intercept_errors" and 
       "fastcgi_intercept_errors" directives.

    *) Feature: the ngx_http_charset_module supports the recoding from the 
       single byte encodings to the UTF-8 encoding and back.

    *) Feature: the "X-Accel-Charset" response header line is supported in 
       proxy and FastCGI mode.

    *) Bugfix: the "\" escape symbol in the "\"" and "\'" pairs in the SSI 
       command was removed only if the command also has the "$" symbol.

    *) Bugfix: the "