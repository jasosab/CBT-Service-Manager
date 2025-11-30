package com.cbt.cbt_service_manager.service;

import com.cbt.cbt_service_manager.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User createUser(User user);

    List<User> listUsers();

    Optional<User> getUser(Long id);

    Optional<User> updateUser(Long id, User request);

    boolean deleteUser(Long id);

    User update(Long id, User user);

}
