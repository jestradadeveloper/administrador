FROM ruby:3.0.0

#add user
RUN useradd developer
#create folder for developer
RUN mkdir -p /home/developer
WORKDIR /home
#set permissions for developer user
RUN chown -R developer:developer  developer
RUN chmod 755 developer 
#set user
USER developer
#create folder app
RUN mkdir -p /home/developer/app
#user folder app
WORKDIR /home/developer/app
#copy files
COPY ./Gemfile .
COPY ./Gemfile.lock .
#install gems
RUN bundle install
#copy api app
COPY ./ .
#expose port for api
EXPOSE 3000
#run server
ENTRYPOINT [ "./entrypoints/docker-entrypoint.sh" ]
RUN bundle